import { Observable } from "rxjs";

export interface IGetComics {
  getComics(limit?: number, index?: number): Observable<unknown>;
}
