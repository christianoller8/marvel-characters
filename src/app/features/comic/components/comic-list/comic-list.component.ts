import { Component, Input, OnInit } from "@angular/core";
import { tap } from "rxjs";
import { DataService } from "src/app/shared/services/implementations/data.service";
import { IComicDataWrapper } from "../../models/IComicDataWrapper";
import { IComic } from "../../models/IComic";
import { IRequestParams } from "src/app/shared/models/IRequestParams";
import { COMIC_TABLE_SIZE} from "src/app/core/constants/constants";
import { IListComic } from "../../models/IListComics";

@Component({
  selector: "app-comic-list",
  templateUrl: "./comic-list.component.html",
  styleUrls: ["./comic-list.component.scss"],
})
export class ComicListComponent implements OnInit {

  @Input()info: IListComic = {} as IListComic;
  reqParams : IRequestParams = {} as IRequestParams;
  comics: IComic[] = [];
  pageIndex = 1;
  count = 0;
  
  hidden = true;
 
  constructor(private data: DataService) {
    this.reqParams.limit = COMIC_TABLE_SIZE * 2;
    this.reqParams.order = this.info.order;

  }
  
  ngOnInit() {
    this.getComics(this.reqParams);
  }

  getComics(reqParams : IRequestParams) {
    this.data
      .getComics(reqParams)
      .pipe(tap((error) => {}))
      .subscribe((data) => {
        const dataWrapper = data as IComicDataWrapper;

        this.comics = dataWrapper.data.results;
        console.log(this.comics);
      });
  }

  loadMore() {
    this.hidden = false;
  }
}
