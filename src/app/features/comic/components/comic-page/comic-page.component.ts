import { Component, OnInit } from "@angular/core";
import { IListComic } from "../../models/IListComics";
import { DEFAULT_ORDER_COMICS } from "src/app/core/constants/constants";

@Component({
  selector: "app-comic-page",
  templateUrl: "./comic-page.component.html",
  styleUrls: ["./comic-page.component.scss"],
})
export class ComicPageComponent implements OnInit {
  lists : IListComic[] = [];

  defaultInfo = {
    title: "",
    order: "",
  };
  constructor() {}

  ngOnInit(): void {
    let info: IListComic;
    info = this.createInfo("APRIL NEW RELEASES", "onsaleDate");
    this.lists.push(info);

    info = this.createInfo("FREE COMICS", "focDate");
    this.lists.push(info);


    info = this.createInfo("GENERAL COMICS", "title");
    this.lists.push(info);

  }

  createInfo(title:string, order:string) : IListComic{
    const info : IListComic = {
      title: title,
      order: order,
    };

    return info;
  }
}
