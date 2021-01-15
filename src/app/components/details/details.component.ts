import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/types/Pokemon';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  pokemon: Pokemon = {
    id: -1,
    sprites: {
      front_default: '',
    },
    name: '',
    types: [],
    stats: [],
    height: 0,
    weight: 0,
  };

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (this.pokemonService.pokemons.length) {
      const pokemon = this.pokemonService.pokemons.find(
        (p: Pokemon) => p.id == Number(id)
      );
      if (pokemon) this.pokemon = pokemon;
    } else {
      this.pokemonService.getPokemon(id).subscribe((res: any) => {
        this.pokemon = res;
      });
    }
  }

  toggleFavorite(id: number) {
    this.pokemonService.toggleFavorite(id);
  }
}
