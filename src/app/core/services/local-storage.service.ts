import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  getLanguage() {
    return localStorage.getItem("lang");
  }

  setLanguage(value: string) {
    return localStorage.setItem("lang", value);
  }

  setPublicKey(value: string){
    return localStorage.setItem("key", value);
  }

  getPublicKey() {
    return localStorage.getItem("key");
  }

}
