import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SandroFooterModule } from "sandro-footer";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from "@angular/common/http";
import { ErrorInterceptor } from "./core/interceptors/error.interceptor";

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { BreadcrumbComponent } from "./core/components/breadcrumb/breadcrumb.component";
import { BackButtonComponent } from "./shared/components/back-button/back-button.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";

import { CharacterPageComponent } from "./features/characters/components/character-page/character-page.component";
import { ComicPageComponent } from "./features/comic/components/comic-page/comic-page.component";
import { ComicListComponent } from "./features/comic/components/comic-list/comic-list.component";
import { NgxPaginationModule } from "ngx-pagination";
import { ComicComponent } from "./features/comic/components/comic/comic.component";
import { CarouselComponent } from "./features/comic/components/carousel/carousel.component";
import { HeaderComponent } from "./features/header/header.component";
import { FooterComponent } from "./features/footer/footer.component";
import { ComicDetailComponent } from "./features/comic/components/comic-detail/comic-detail.component";
import { CharacterSelectorComponent } from "./features/characters/components/character-selector/character-selector.component";

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    BackButtonComponent,
    NavbarComponent,
    ComicPageComponent,
    CharacterPageComponent,
    ComicListComponent,
    CharacterSelectorComponent,
    ComicComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    ComicDetailComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    SandroFooterModule,
    BreadcrumbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
