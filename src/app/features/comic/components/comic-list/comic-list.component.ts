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

  ngOnInit() {
    this.getComics();
  }

  getComics() {
    this.data
      .getComics()
      .pipe(tap((error) => {}))
      .subscribe((data) => {
        const dataWrapper = data as IComicDataWrapper;

        console.log(dataWrapper.data?.results);

        this.comics = dataWrapper.data?.results ?? [];
      });
  }
}
