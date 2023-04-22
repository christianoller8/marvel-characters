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

  ngOnInit() {
    this.getComics(this.tableSize * 2);
  }

  getComics(nResults: number) {
    this.data
      .getComics(nResults, this.pageIndex)
      .pipe(tap((error) => {}))
      .subscribe((data) => {
        const dataWrapper = data as IComicDataWrapper;

        console.log(dataWrapper);

        this.comics.push(...dataWrapper.data.results);
      });
  }

  handlePageChange(event: number) {
    this.pageIndex = event;
    this.getComics(this.tableSize);
  }
}
