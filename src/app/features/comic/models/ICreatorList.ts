import { ICreatorSummary } from "./ICreatorSummary";

export interface ICreatorList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items: ICreatorSummary[];
}
