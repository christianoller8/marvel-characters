import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LocalStorageService } from "src/app/core/services/local-storage.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  activeLang = "";

  constructor(
    public translate: TranslateService,
    public localStorage: LocalStorageService
  ) {
    this.translate.addLangs(["es", "en"]);
    this.setupLanguage();
  }

  public switchLang(lang: string) {
    this.activeLang = lang;
    this.translate.use(lang);

    this.localStorage.setLanguage(lang);
  }

  setupLanguage() {
    const lang = this.localStorage.getLanguage();
    if (lang) {
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
      this.activeLang = lang;
    } else {
      const browserLang = this.translate.getBrowserLang();
      const existingLang = browserLang?.match(/es|en/) ? browserLang : "en";
      this.translate.setDefaultLang(existingLang);
      this.translate.use(existingLang);
      this.localStorage.setLanguage(existingLang);
      this.activeLang = existingLang;
    }
  }
}
