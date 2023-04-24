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
  hash = md5(this.ts + environment.privateKey + environment.publicKey);
  baseUrl = "http://gateway.marvel.com/";

  params: HttpParams;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.params = new HttpParams()
      .set("ts", this.ts)
      .set("apikey", environment.publicKey)
      .set("hash", this.hash);
  }

  getComics(
    limit?: number,
    offset?: number,
    order?: string
  ): Observable<unknown> {
    const url = this.baseUrl + "v1/public/comics";

    const params = this.setParams(limit, offset, order);

    return this.http.get(url, { params: params });
  }

  getCharacters(
    limit?: number,
    offset?: number,
    order?: string
  ): Observable<unknown> {
    const url = this.baseUrl + "v1/public/characters";
    const params = this.setParams(limit, offset, order);

    return this.http.get(url, { params: params });
  }

  setParams(limit?: number, offset?: number, order?: string) {
    let paramsExtended = this.params;

    if (limit) {
      paramsExtended = paramsExtended.set("limit", limit.toString());
    }

    if (offset) {
      paramsExtended = paramsExtended.set("offset", offset.toString());
    }

    if (order) {
      paramsExtended = paramsExtended.set("orderBy", order.toString());
    }

    return paramsExtended;
  }
}
