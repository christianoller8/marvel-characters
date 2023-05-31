import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { md5 } from "src/app/core/utils/utils";
import { environment } from "src/environments/environment";
import { IGetComics } from "../contracts/IGetComics";
import { IGetCharacters } from "../contracts/IGetCharacters";
import { IRequestParams } from "../../models/IRequestParams";

@Injectable({
  providedIn: "root",
})
export class DataService implements IGetComics, IGetCharacters {
  ts = "1";
  hash = md5(this.ts + environment.privateKey + environment.publicKey);
  baseUrl = "http://gateway.marvel.com/";

  params: HttpParams;

  constructor(
    private http: HttpClient
  ) {
    this.params = new HttpParams()
      .set("ts", this.ts)
      .set("apikey", environment.publicKey)
      .set("hash", this.hash);
  }

  getComics(
    reqParams:IRequestParams
  ): Observable<unknown> {
    const url = this.baseUrl + "v1/public/comics";

    const params = this.setParams(reqParams);

    return this.http.get(url, { params: params });
  }

  getCharacters(
    reqParams:IRequestParams
  ): Observable<unknown> {
    const url = this.baseUrl + "v1/public/characters";
    const params = this.setParams(reqParams);

    return this.http.get(url, { params: params });
  }

  setParams(reqParams : IRequestParams) {
    let paramsExtended = this.params;

    if (reqParams.limit) {
      paramsExtended = paramsExtended.set("limit", reqParams.limit.toString());
    }

    if (reqParams.offset) {
      paramsExtended = paramsExtended.set("offset", reqParams.offset.toString());
    }

    if (reqParams.order) {
      paramsExtended = paramsExtended.set("orderBy", reqParams.order.toString());
    }

    if (reqParams.beginWith){
      paramsExtended = paramsExtended.set("nameStartsWith", reqParams.beginWith.toString());
    }

    return paramsExtended;
  }
}
