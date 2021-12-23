import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonsService } from '../../services/pokemons.service';
import { Payload } from '../../models/interfaces';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy, Payload {
  pokemons: Array<{
    name: string,
    url: string,
  }>
  pokemonsSubscription: Subscription = new Subscription;
  loadMorePokemonsSubscription: Subscription = new Subscription;
  offset: number;

  constructor(private pokemonsService: PokemonsService) {
    this.pokemons = [];
    this.offset = 50;
  }

  ngOnInit(): void {
    this.pokemonsList();
  }

  pokemonsList(): void {
    this.pokemonsSubscription = this.pokemonsService.getPokemons().subscribe(pokemons => {
      this.pokemons = pokemons.results;
    })
  }

  loadMorePokemons(): void {
    this.offset += 50;
    this.loadMorePokemonsSubscription = this.pokemonsService.loadMorePokemons(this.offset).subscribe(pokemons => {
      this.addPokemons(pokemons.results);
    })
  }

  shareUrl(url: string): void {
    this.pokemonsService.shareUrlPokemon(url);
  }

  addPokemons(pokemons: any): void {
    const scrollingElement = (document.scrollingElement || document.body)
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
    
    pokemons.map((pokemon: { name: string; url: string; }) => {
      this.pokemons.push(pokemon);
    })
  }

  ngOnDestroy(): void {
    this.pokemonsSubscription.unsubscribe();
    this.loadMorePokemonsSubscription.unsubscribe();
  }

}
