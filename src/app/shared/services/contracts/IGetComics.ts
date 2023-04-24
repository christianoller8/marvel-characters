import { Observable } from "rxjs";

export interface IGetComics {
  getComics(limit?: number, offset?:number, order?: string): Observable<unknown>;
}
