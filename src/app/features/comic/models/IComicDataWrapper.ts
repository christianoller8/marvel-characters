import { IComicDataContainer } from "./IComicDataContainer";

export interface IComicDataWrapper {
  code?: number;
  status?: string;
  attributionText?: string;
  attributionHTML?: string;
  data: IComicDataContainer;
  etag?: string;
}
