import { ICharacterSummary } from "./ICharacterSummary";

export interface ICharacterList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: ICharacterSummary[];
}
