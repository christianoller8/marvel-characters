import { Component } from "@angular/core";
import { tap } from "rxjs";
import { DataService } from "src/app/shared/services/implementations/data.service";

@Component({
  selector: "app-comic-page",
  templateUrl: "./comic-page.component.html",
  styleUrls: ["./comic-page.component.scss"]
})
export class ComicPageComponent {
  
  
  constructor(private data : DataService){
    this.getComics();
  }

  getComics(){
    this.data
      .getComics()
      .pipe(tap((error) =>{}))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
