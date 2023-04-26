import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { LocalStorageService } from "src/app/core/services/local-storage.service";
import { LoginService } from "../services/login.service";
import { md5 } from "src/app/core/utils/utils";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { IRequestParams } from "src/app/shared/models/IRequestParams";
import { IComicDataWrapper } from "../../comic/models/IComicDataWrapper";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private localStorage: LocalStorageService,
    private http : HttpClient
  ) {
    this.loginForm = this.fb.group({
      privateKey: ["", Validators.required],
      publicKey: ["", Validators.required],
    });
  }

  verify() {
    const ts = "1";
    const publicKey = this.loginForm.get("publicKey")?.value;
    const privateKey = this.loginForm.get("privateKey")?.value ;
    
    //Hacer hash
    const hash = md5(ts + privateKey + publicKey);
    
    //llamada a la api
    const reqParams = new HttpParams()
      .set("ts", ts)
      .set("apikey", publicKey)
      .set("hash", hash);
    const res = this.http.get(environment.url + "v1/public/comics", {params : reqParams});

    // comprobar code
    let code: unknown;
    res.subscribe((data) => {
      const reqInfo : IComicDataWrapper = data as IComicDataWrapper;
      code = reqInfo.code;

      //Si code == 200 guardar en local
      if(this.verifyCode(code)){
        this.localStorage.setHash(hash);
        this.router.navigate(["/comics"]);
      }
      else{
        this.router.navigate(["/login"]);
      }
    });
    
  }


  verifyCode(code:unknown) : boolean{
    return code === 200;
  }
}
