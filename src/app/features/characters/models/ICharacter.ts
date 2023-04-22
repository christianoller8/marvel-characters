import { IComicList } from "./IComicList";
import { IEventList } from "src/app/shared/models/IEventList";
import { IImage } from "src/app/shared/models/IImage";
import { ISeriesList } from "./ISeriesList";
import { IStoryList } from "src/app/shared/models/IStoryList";
import { IUrl } from "src/app/shared/models/IUrl";

export interface ICharacter {
  id?: number;
  name?: string;
  description?: string;
  modified?: Date;
  resourceURI?: string;
  urls?: IUrl[];
  thumbnail?: IImage;
  comics?: IComicList;
  stories?: IStoryList;
  events?: IEventList;
  series?: ISeriesList;
}
