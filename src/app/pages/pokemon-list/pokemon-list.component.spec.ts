import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/internal/observable/of';

import { PokemonListComponent } from './pokemon-list.component';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create ngOnInit', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should fetch pokemonsList', () => {
    spyOn(component, 'pokemonsList').and.returnValue();
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should execute shareUrl', () => {
    component.shareUrl('https://pokeapi.co/api/v2/pokemon/1/');
    expect(component.shareUrl).toBeTruthy();
  });

  it('should execute addPokemons', () => {
    const payload = [
      {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/"
      },
      {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/"
      },
    ];
    component.addPokemons(payload);
    expect(component.addPokemons).toBeTruthy();
  });

  it('should create addPokemons empty payload', () => {
    const payload = [{}];
    component.addPokemons(payload);
    expect(component.addPokemons).toBeTruthy();
  });

  it('should fetch loadMorePokemons', () => {
    component.offset = 50;
    spyOn(component, 'loadMorePokemons').and.returnValue();
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('ngOnDestroy', () => {
    component.ngOnDestroy(); 
    expect(component.ngOnDestroy).toBeTruthy();
  });

});
