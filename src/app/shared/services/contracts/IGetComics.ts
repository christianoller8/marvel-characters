import { Observable } from "rxjs";
import { IRequestParams } from "../../models/IRequestParams";

export interface IGetComics {
  getComics(reqParams:IRequestParams): Observable<unknown>;
}
