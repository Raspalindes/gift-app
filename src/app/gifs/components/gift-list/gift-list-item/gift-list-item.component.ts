import { Component, input } from '@angular/core';

@Component({
  selector: 'gift-list-item',
  imports: [],
  templateUrl: './gift-list-item.component.html',
  styleUrl: './gift-list-item.component.css'
})
export class GiftListItemComponent {
// TODO: imageUrl: string; input

public imageUrl = input.required<string>();


}
