import { IStorySummary } from "./IStorySummary";

export interface IStoryList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: IStorySummary[];
  }
  