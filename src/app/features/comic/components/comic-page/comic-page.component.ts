import { Component } from "@angular/core";

@Component({
  selector: "app-comic-page",
  templateUrl: "./comic-page.component.html",
  styleUrls: ["./comic-page.component.scss"],
})
export class ComicPageComponent {
  
  titleList : string[] = [];
  
  constructor() {
    this.titleList[0] = "APRIL NEW RELEASES";
  }
}
