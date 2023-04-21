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
import { ComicPageComponent } from './features/comic/components/comic-page/comic-page.component';

@NgModule({
  declarations: [AppComponent, BreadcrumbComponent, BackButtonComponent, NavbarComponent, ComicPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SandroFooterModule,
    BreadcrumbModule,
    HttpClientModule,
    SandroFooterModule,
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
