import { Observable } from "rxjs";

export interface IGetCharacters{
    getCharacters(limit?: number, offset?:number, order?: string) : Observable<unknown>
}