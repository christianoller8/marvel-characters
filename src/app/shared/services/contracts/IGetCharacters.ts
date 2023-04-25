import { Observable } from "rxjs";
import { IRequestParams } from "../../models/IRequestParams";

export interface IGetCharacters{
    getCharacters(reqParams:IRequestParams) : Observable<unknown>
}