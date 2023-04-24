import { Component, OnInit } from "@angular/core";
import { tap } from "rxjs";
import { DataService } from "src/app/shared/services/implementations/data.service";
import { IComicDataWrapper } from "../../models/IComicDataWrapper";
import { IComic } from "../../models/IComic";

@Component({
  selector: "app-comic-list",
  templateUrl: "./comic-list.component.html",
  styleUrls: ["./comic-list.component.scss"],
})
export class ComicListComponent implements OnInit {
  constructor(private data: DataService) {}

  comics: IComic[] = [];
  tableSize = 10;
  pageIndex = 1;
  count = 0;

  hidden = true;

  order = "-onsaleDate";

  ngOnInit() {
    this.getComics(this.tableSize * 2, this.order);
  }

  getComics(nResults: number, order: string) {
    this.data
      .getComics(nResults, undefined, order)
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
