import { IComicList } from "./IComicList";
import { IEventList } from "./IEventList";
import { IImage } from "./IImage";
import { ISeriesList } from "./ISeriesList";
import { IStoryList } from "./IStoryList";
import { IUrl } from "./IUrl";

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