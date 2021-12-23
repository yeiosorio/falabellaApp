import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PokemonDetailComponent } from './pokemon-detail.component';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.pokemonUrlDetail = 'https://pokeapi.co/api/v2/pokemon/charmander';
    component.pokemon = {
      abilities: [
        {
          ability: {
            name: "blaze"
          }
        },
        {
          ability: {
            name: "solar-power"
          }
        }
      ],
      base_experience: 62,
      name: 'charmander',
      sprites: {
        other: {
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
          }
        }
      },
      weight: 89
    };

    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create ngOnInit', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  
  it('should create getPokemonDetail', () => {
    component.getPokemonDetail();
    expect(component.getPokemonDetail).toBeTruthy();
  });

  it('should create comeBack', () => {
    component.comeBack();
    expect(component.comeBack).toBeTruthy();
  });


  it('ngOnDestroy', () => {
    component.ngOnDestroy(); 
    expect(component.ngOnDestroy).toBeTruthy();
  });
});
