import { Component } from "@angular/core";
import { MenuItem } from "primeng/api";
import { NavigationService } from "../../services/navigation.service";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"],
})
export class BreadcrumbComponent {
  static readonly ROUTE_DATA_BREADCRUMB = "breadcrumb";
  readonly home = { icon: "pi pi-home", routerLink: "/" };
  menuItems: MenuItem[] = [];

  constructor(
    private navigation: NavigationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(
        () =>
          (this.menuItems = this.createBreadcrumbs(this.activatedRoute.root))
      );
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url = "",
    breadcrumbs: MenuItem[] = []
  ): MenuItem[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length) {
      for (const child of children) {
        const routeURL: string = child.snapshot.url
          .map((segment) => segment.path)
          .join("/");
        if (routeURL !== "") {
          url += `/${routeURL}`;
        }

        const label =
          child.snapshot.data[BreadcrumbComponent.ROUTE_DATA_BREADCRUMB];
        if (label) {
          if (url == "") {
            url = "/";
          }
          breadcrumbs.push({ label, routerLink: url });
        }

        return this.createBreadcrumbs(child, url, breadcrumbs);
      }
    }

    return breadcrumbs;
  }

  syncHistory() {
    this.navigation.syncWithBreadCrumb();
  }
}
