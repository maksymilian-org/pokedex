import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  count: number = 16;
  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    if (!this.pokemonService.pokemons.length) this.pokemonService.getPokemons();
  }

  loadMore() {
    this.count += 16;
  }
}
