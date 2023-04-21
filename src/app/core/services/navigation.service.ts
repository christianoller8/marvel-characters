import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { delay } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  history: string[] = [];

  constructor(private router: Router) {}

  public startSaveHistory(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });
  }

  public goBack(): void {
    this.history.pop();

    if (this.history.length > 0) {
      this.router.navigateByUrl(this.history.pop()!);
    } else {
      this.router.navigateByUrl("/");
    }
  }

  public async syncWithBreadCrumb() {
    await delay(50);
    const currentURL = this.router.url;
    this.history.pop();

    while (
      this.history[this.history.length - 1] !== currentURL &&
      this.history.length > 0
    ) {
      this.history.pop();
    }
  }
}
