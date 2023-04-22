import { Observable } from "rxjs";

export interface IGetCharacters{
    getCharacters() : Observable<unknown>
}