import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  
  setLanguage(value: string) {
    return localStorage.setItem("lang", value);
  }

  getLanguage() {
    return localStorage.getItem("lang");
  }

  setPublicKey(value: string){
    return localStorage.setItem("key", value);
  }

  getPublicKey() {
    return localStorage.getItem("key");
  }

  setHash(value:string){
    return localStorage.setItem("hash", value);
  }

  getHash(){
    return localStorage.getItem("hash");
  }


}
