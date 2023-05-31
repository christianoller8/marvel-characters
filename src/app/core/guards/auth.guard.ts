
import { Router} from "@angular/router";
import { LocalStorageService } from "../services/local-storage.service";
import { inject } from "@angular/core";

export const AuthGuard = () =>{
  const router = inject(Router);

  const localStorage = inject(LocalStorageService);

  if(localStorage.getHash()){
    return true;
  }
  else{
    console.log("Guard doing his job");
    router.navigate(["/login"]);
    return false;
  }

};
