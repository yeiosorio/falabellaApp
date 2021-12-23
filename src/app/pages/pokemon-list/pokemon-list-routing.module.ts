import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list.component';

const routes: Routes = [
  { 
    path: 'pokemonDetail/:name',
    loadChildren: () => import('../pokemon-detail/pokemon-detail.module').then(m => m.PokemonDetailModule) 
  },
  {
    path: '',
    component: PokemonListComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonListRoutingModule { }
