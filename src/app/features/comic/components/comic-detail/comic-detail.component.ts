import { Component, OnInit } from "@angular/core";
import { tap } from "rxjs";
import { DataService } from "src/app/shared/services/implementations/data.service";
import { IComicDataWrapper } from "../../models/IComicDataWrapper";
import { IComic } from "../../models/IComic";

@Component({
  selector: "app-comic-detail",
  templateUrl: "./comic-detail.component.html",
  styleUrls: ["./comic-detail.component.scss"],
})
export class ComicDetailComponent implements OnInit {
  constructor(private data: DataService) {}

  comics: IComic[] = [];
  tableSize = 10;
  pageIndex = 1;
  count = 0;

  hidden = true;

  ngOnInit() {
    this.getComics(this.tableSize * 2);
  }

  getComics(nResults: number) {
    this.data
      .getComics(nResults)
      .pipe(tap((error) => {}))
      .subscribe((data) => {
        const dataWrapper = data as IComicDataWrapper;

        this.comics = dataWrapper.data.results;
        console.log(this.comics);
      });
  }
}
