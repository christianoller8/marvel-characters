import { Component } from "@angular/core";
import { tap } from "rxjs";
import { DataService } from "src/app/shared/services/implementations/data.service";
import { ICharacterDataWrapper } from "../../models/ICharacterDataWrapper";
import { ICharacter } from "../../models/ICharacter";

@Component({
  selector: "app-character-page",
  templateUrl: "./character-page.component.html",
  styleUrls: ["./character-page.component.scss"],
})
export class CharacterPageComponent {
  characters: ICharacter[] = [];
  limit = 10;
  order = "name";
  total = 0;

  currentPage = 1;

  constructor(private data: DataService) {
    this.getCharacters(this.limit, 0, this.order);
  }

  getCharacters(limit?: number, offset?: number, order?: string) {
    this.data
      .getCharacters(limit, offset, order)
      .pipe(tap((error) => {}))
      .subscribe((data) => {
        const dataWrapper = data as ICharacterDataWrapper;
        this.characters = dataWrapper.data.results;
        this.total = dataWrapper.data.total;
        console.log(dataWrapper.data.results);
      });
  }

  changePage(event: number) {
    this.currentPage = event;

    const offset = (this.currentPage - 1) * this.limit;

    this.getCharacters(this.limit, offset, this.order);
  }
}
