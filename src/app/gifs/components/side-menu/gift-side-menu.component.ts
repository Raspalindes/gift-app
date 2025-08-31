import { Component } from '@angular/core';
import { GiftSideMenuHeaderComponent } from "./side-menu-header/side-menu-header.component";
import { GiftSideMenuOptionsComponent } from "./side-menu-options/side-menu-options.component";

@Component({
  selector: 'gift-side-menu',
  imports: [GiftSideMenuHeaderComponent, GiftSideMenuOptionsComponent],
  templateUrl: './gift-side-menu.component.html',
  styleUrl: './gift-side-menu.component.css'
})
export class GiftSideMenuComponent {

}
