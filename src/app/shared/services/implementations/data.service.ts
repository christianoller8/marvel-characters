import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LocalStorageService } from "src/app/core/services/local-storage.service";
import { md5 } from "src/app/core/utils/utils";
import { environment } from "src/environments/environment";
import { IGetComics } from "../contracts/IGetComics";

@Injectable({
  providedIn: "root"
})
export class DataService implements IGetComics {
  ts = "1";
  
  constructor(private http : HttpClient, private localStorageService : LocalStorageService) {}

  buildURL(endpoint : string) : string{
    const publicKey = this.localStorageService.getPublicKey();
    const hash = md5(this.ts + environment.privateKey + publicKey);

    const url = "http://gateway.marvel.com/" + endpoint + "?ts=" + this.ts + "&apikey=" + publicKey + "&hash=" + hash;

    return url;
  }

  getComics() : Observable<unknown>{
    const url = this.buildURL("/v1/public/comics");

    return this.http.get(url);

  }
}
