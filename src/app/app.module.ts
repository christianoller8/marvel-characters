import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
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

import { NgxPaginationModule } from "ngx-pagination";

import { ComicsModule } from "./features/comic/comics.module";
import { CharactersModule } from "./features/characters/characters.module";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/components/material/material.module";

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    ComicsModule,
    CharactersModule,
    SharedModule,
    MaterialModule,
    AppRoutingModule,
    NgxPaginationModule,
    BreadcrumbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
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
