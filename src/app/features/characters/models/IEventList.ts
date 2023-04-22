import { IEventSummary } from "./IEventSummary";

export interface IEventList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: IEventSummary[];
  }
  