import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./features/login/login/login.component";
import { AuthGuard } from "./core/guards/auth.guard";

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
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./features/comic/comics.module").then((m) => m.ComicsModule),
  },
  {
    path: "characters",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./features/characters/characters.module").then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: "**",
    redirectTo: "login",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
