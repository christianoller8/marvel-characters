import { Component } from "@angular/core";
import { environment } from "src/environments/environment";
import { LocalStorageService } from "./core/services/local-storage.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "template";
  name = environment.name;

  constructor(private localStorageService: LocalStorageService) {
    console.log(environment.name);
  }
}
