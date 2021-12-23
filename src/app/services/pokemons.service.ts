import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, filter } from 'rxjs/operators';
import { CONFIGS } from '../configs/app.config';
import { IpokemonsResponse } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  pokemon: Array<IpokemonsResponse> = [];
  private data = new BehaviorSubject<any>('https://pokeapi.co/api/v2/pokemon/1/');
  public url$ = this.data.asObservable();  

  constructor(public http: HttpClient) { }

  getPokemons(): Observable<any> {

    const queryString = '?offset=0&limit=50'
    return this.http.get<any>(`${CONFIGS.pokemonEndpoint + queryString}`)
    .pipe(
      map(pokemons => pokemons),
      catchError(this.handleError<any>('Pokemons'))
    );
    
  }

  getPokemonDetail(pokemonUrlDetail: string): Observable<any> {

    return this.http.get<any>(pokemonUrlDetail)
    .pipe(
      map(pokemonDetail => pokemonDetail),
      catchError(this.handleError<any>('Pokemons'))
    );

  }

  loadMorePokemons(nextPage: number): Observable<any> {

    const offset = `${'offset=' + nextPage}`
    const queryString = `${'?limit=50&' + offset}`
    return this.http.get<any>(`${CONFIGS.pokemonEndpoint + queryString}`)
    .pipe(
      map(pokemons => pokemons),
      catchError(this.handleError<any>('Pokemons'))
    );

  }

  shareUrlPokemon(url: string){
    this.data.next(url);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`failed: ${error.message}`);
      return of(result as T);
    };
  }
}
