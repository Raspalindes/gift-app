import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GiftSideMenuComponent } from "../../components/side-menu/gift-side-menu.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GiftSideMenuComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export default class DashboardPageComponent {

}
