import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { WelcomePanelComponent } from "./welcome-panel/welcome-panel.component";
import { LoginPanelComponent } from "./login-panel/login-panel.component";
import { RegisterPanelComponent } from "./register-panel/register-panel.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, WelcomePanelComponent, LoginPanelComponent, RegisterPanelComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "simpleaccounts-web";
}
