import { Md5 } from "ts-md5";

export function md5(str : string){
    return Md5.hashStr(str);
}