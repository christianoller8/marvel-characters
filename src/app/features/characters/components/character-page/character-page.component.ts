import { Component } from "@angular/core";
import { tap } from "rxjs";
import { DataService } from "src/app/shared/services/implementations/data.service";
import { ICharacterDataWrapper } from "../../models/ICharacterDataWrapper";

@Component({
  selector: "app-character-page",
  templateUrl: "./character-page.component.html",
  styleUrls: ["./character-page.component.scss"]
})
export class CharacterPageComponent {
  constructor(private data : DataService){
    this.getCharacters();
  }

  getCharacters(){
    this.data
      .getCharacters()
      .pipe(tap((error) =>{}))
      .subscribe((data) => {
        const dataWrapper = data as ICharacterDataWrapper;

        console.log(dataWrapper.data?.results);
      });
  }
}
