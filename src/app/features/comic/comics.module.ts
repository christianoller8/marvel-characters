import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { ComicDetailComponent } from "./components/comic-detail/comic-detail.component";
import { ComicListComponent } from "./components/comic-list/comic-list.component";
import { ComicPageComponent } from "./components/comic-page/comic-page.component";
import { ComicComponent } from "./components/comic/comic.component";
import { ComicsRoutingModule } from "./comics-routing.module";

@NgModule({
  declarations: [
    ComicPageComponent,
    ComicListComponent,
    ComicComponent,
    CarouselComponent,
    ComicDetailComponent,
  ],
  imports: [CommonModule, ComicsRoutingModule],
  exports: [
    ComicPageComponent,
    ComicListComponent,
    ComicComponent,
    CarouselComponent,
    ComicDetailComponent,
  ],
})
export class ComicsModule {}
