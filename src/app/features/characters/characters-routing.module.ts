import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CharacterPageComponent } from "./components/character-page/character-page.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: CharacterPageComponent },
      //{ path: ":id", component: },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
