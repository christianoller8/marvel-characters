import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { ComicPageComponent } from "./components/comic-page/comic-page.component";
import { ComicListComponent } from "./components/comic-list/comic-list.component";
import { ComicComponent } from "./components/comic/comic.component";
import { ComicDetailComponent } from "./components/comic-detail/comic-detail.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: ComicPageComponent },
      { path: ":id", component: ComicDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicsRoutingModule {}
