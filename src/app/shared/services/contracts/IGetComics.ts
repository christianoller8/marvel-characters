import { Observable } from "rxjs";

export interface IGetComics{
    getComics() : Observable <unknown>
}