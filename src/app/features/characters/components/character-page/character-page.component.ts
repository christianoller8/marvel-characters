import { Component, OnInit } from "@angular/core";
import { tap } from "rxjs";
import { DataService } from "src/app/shared/services/implementations/data.service";
import { ICharacterDataWrapper } from "../../models/ICharacterDataWrapper";
import { ICharacter } from "../../models/ICharacter";
import { DEFAULT_LIMIT, DEFAULT_ORDER_CHARACTERS, ITEMS_PAGE } from "src/app/core/constants/constants";
import { IRequestParams } from "src/app/shared/models/IRequestParams";

@Component({
  selector: "app-character-page",
  templateUrl: "./character-page.component.html",
  styleUrls: ["./character-page.component.scss"],
})
export class CharacterPageComponent implements OnInit {
  characters: ICharacter[] = [];

  total = 0;
  currentPage = 1;

  reqParams : IRequestParams = {} as IRequestParams;

  constructor(private data: DataService) {
    this.reqParams.limit = ITEMS_PAGE;
    this.reqParams.offset = 0;
    this.reqParams.order = DEFAULT_ORDER_CHARACTERS;
  }

  ngOnInit(): void {
    this.getCharacters(this.reqParams); //constantes
  }

  changePage(event: number) {
    this.currentPage = event;

    this.reqParams.offset = (this.currentPage - 1) * (this.reqParams.limit || DEFAULT_LIMIT);

    this.getCharacters(this.reqParams);
  }

  changeOrder(order: string) {
    this.reqParams.order = order;
    this.getCharacters(this.reqParams);
  }

  searchName(beginWith: string) {
    this.reqParams.beginWith = beginWith;
    this.reqParams.offset = 0;
    this.currentPage = 1;
    this.getCharacters(this.reqParams);
  }

  getCharacters(reqParams : IRequestParams) {
    this.data
      .getCharacters(reqParams)
      .pipe(tap((error) => {}))
      .subscribe((data) => {
        const dataWrapper = data as ICharacterDataWrapper;
        this.characters = dataWrapper.data.results;
        this.total = dataWrapper.data.total;
        console.log(dataWrapper.data.results);
      });
  }
}
