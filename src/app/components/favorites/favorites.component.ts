import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    if (!this.pokemonService.pokemons.length) this.pokemonService.getPokemons();
  }
}
