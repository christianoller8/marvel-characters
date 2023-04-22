import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LocalStorageService } from "src/app/core/services/local-storage.service";
import { md5 } from "src/app/core/utils/utils";
import { environment } from "src/environments/environment";
import { IGetComics } from "../contracts/IGetComics";
import { IGetCharacters } from "../contracts/IGetCharacters";

@Injectable({
  providedIn: "root",
})
export class DataService implements IGetComics, IGetCharacters {
  ts = "1";
  publicKey = this.localStorageService.getPublicKey()!;
  hash = md5(this.ts + environment.privateKey + this.publicKey);
  baseUrl = "http://gateway.marvel.com/";

  params: HttpParams;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.params = new HttpParams()
      .set("ts", this.ts)
      .set("apikey", this.publicKey)
      .set("hash", this.hash);
  }

  getComics(limit: number, index: number): Observable<unknown> {
    const url = this.baseUrl + "v1/public/comics";

    const params = this.setParams(limit, index);

    return this.http.get(url, { params: params });
  }

  setParams(limit: number, index: number) {
    let offset = limit + limit * (index - 1);
    if (index === 1) {
      offset = 0;
    }

    let paramsExtended = this.params;
    paramsExtended = paramsExtended
      .set("limit", limit.toString())
      .set("offset", offset.toString())
      .set("orderBy", "-onsaleDate");
    return paramsExtended;
  }

  getCharacters(): Observable<unknown> {
    return this.http.get(this.baseUrl);
  }
}
