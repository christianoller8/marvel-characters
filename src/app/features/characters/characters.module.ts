import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharacterPageComponent } from "./components/character-page/character-page.component";
import { CharacterSelectorComponent } from "./components/character-selector/character-selector.component";
import { NgxPaginationModule } from "ngx-pagination";
import { HeroesRoutingModule } from "./characters-routing.module";

@NgModule({
  declarations: [CharacterPageComponent, CharacterSelectorComponent],
  imports: [CommonModule, HeroesRoutingModule, NgxPaginationModule],
  exports: [CharacterPageComponent, CharacterSelectorComponent],
})
export class CharactersModule {}
