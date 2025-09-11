import { Component, input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';
import { GiftListItemComponent } from './gift-list-item/gift-list-item.component';

@Component({
  selector: 'gift-list',
  imports: [GiftListItemComponent],
  templateUrl: './gift-list.component.html',
  styleUrl: './gift-list.component.css',
})
export class GiftListComponent {
  public gift = input.required<Gif[]>();
}
