import { Component, inject, signal } from '@angular/core';
import { GiftListComponent } from '../../components/gift-list/gift-list.component';
import { Gif } from '../../interfaces/gif.interface';
import { GifService } from './../../services/gifs.service';

@Component({
  selector: 'app-search-page',
  imports: [GiftListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export default class SearchPageComponent {
  gifService = inject(GifService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((resp) => {
      this.gifs.set(resp);
    });
  }
}
