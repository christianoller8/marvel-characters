import { ISeriesSummary } from "./ISeriesSummary";

export interface ISeriesList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: ISeriesSummary[];
  }