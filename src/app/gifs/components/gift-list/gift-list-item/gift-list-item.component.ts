import { Component, input } from '@angular/core';

@Component({
  selector: 'gift-list-item',
  imports: [],
  templateUrl: './gift-list-item.component.html',
  styleUrl: './gift-list-item.component.css',
})
export class GiftListItemComponent {
  public imageUrl = input.required<string>();
}
