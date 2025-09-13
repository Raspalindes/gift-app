import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { map, Observable, tap } from 'rxjs';
import { Gif } from '../interfaces/gif.interface';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>({});
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendringGifs();
  }

  loadTrendringGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log({ gifs });
      });
  }
  // Cómo se construye la URL:

  // URL base: `${environment.giphyUrl}/gifs/search`

  // environment.giphyUrl → "https://api.giphy.com/v1"
  // Se concatena con /gifs/search
  // Resultado: "https://api.giphy.com/v1/gifs/search"
  // Parámetros: El objeto params: { ... }

  // Angular automáticamente convierte este objeto en query parameters
  // api_key: environment.giphyApiKey → ?api_key=tu_clave
  // q: query → &q=texto_de_busqueda
  // limit: 20 → &limit=20
  // Resultado final: Angular combina automáticamente la URL base + los parámetros:

  // https://api.giphy.com/v1/gifs/search?api_key=tu_clave&q=cats&limit=20

  searchGifs(query: string) : Observable<Gif[]> {
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          q: query,
          limit: 20,
        },
      })
      .pipe(
        map(({ data }) => data),
        map((items) => GifMapper.mapGiphyItemsToGifArray(items)),

        tap((items) => {
          this.searchHistory.update((history) => ({
            ...history,
            [query.toLocaleLowerCase()]: items,
          }));
        })
      );
  }




  getHistoryGifs(query: string) : Gif[]{
return this.searchHistory()[query] ?? [];


  }
}
