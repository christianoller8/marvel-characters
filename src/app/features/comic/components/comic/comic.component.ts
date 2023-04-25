import { Component, Input, OnInit } from "@angular/core";
import { tap } from "rxjs";
import { DataService } from "src/app/shared/services/implementations/data.service";
import { IComicDataWrapper } from "../../models/IComicDataWrapper";
import { IComic } from "../../models/IComic";

@Component({
  selector: "app-comic",
  templateUrl: "./comic.component.html",
  styleUrls: ["./comic.component.scss"],
})
export class ComicComponent {
  @Input() comic: IComic = {} as IComic;
  
  constructor(private data: DataService) {}

}
