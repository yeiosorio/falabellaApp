import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IpokemonsResponse } from 'src/app/models/interfaces';
import { PokemonsService } from '../../services/pokemons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  pokemonUrlDetail: any;
  getDetailSubscription: Subscription = new Subscription;
  pokemon: IpokemonsResponse;
  
  constructor(route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) {
    this.pokemon = {
      abilities: [],
      base_experience: 0,
      name: '',
      sprites: {
        other: {
          home: {
            front_default: ''
          }
        }
      },
      weight: 0
    }
    route.params.subscribe(params => {
      this.pokemonsService.url$.subscribe(urlPokemon => {
        let url = urlPokemon.substring(0, urlPokemon.lastIndexOf('/'));
        url = url.substring(0, url.lastIndexOf('/'));
        this.pokemonUrlDetail = url + '/' + params.name;
      });
    });
  }

  ngOnInit(): void {
    this.getPokemonDetail();
  }

  getPokemonDetail() {
    this.getDetailSubscription = this.pokemonsService.getPokemonDetail(this.pokemonUrlDetail)
    .subscribe(pokemonDetail => {
      const { abilities, base_experience, name, sprites, weight} = pokemonDetail;
      this.pokemon = {
        abilities: abilities,
        base_experience: base_experience,
        name: name,
        sprites: {
          other: {
            home: {
              front_default: sprites.other.home.front_default
            }
          }
        },
        weight: weight
      }
    });
  }

  comeBack(): void {
    this.router.navigate(['/']);
  }
  
  ngOnDestroy(): void {
    this.getDetailSubscription.unsubscribe();
  }

}
