import { Component, Input } from "@angular/core";
import { ICharacter } from "../../models/ICharacter";

@Component({
  selector: "app-character-selector",
  templateUrl: "./character-selector.component.html",
  styleUrls: ["./character-selector.component.scss"]
})
export class CharacterSelectorComponent {
  @Input() character: ICharacter = {} as ICharacter;

}
