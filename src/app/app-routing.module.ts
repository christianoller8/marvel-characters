import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./features/login/login/login.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "comics",
    loadChildren: () =>
      import("./features/comic/comics.module").then((m) => m.ComicsModule),
  },
  {
    path: "characters",
    loadChildren: () =>
      import("./features/characters/characters.module").then(
        (m) => m.CharactersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
