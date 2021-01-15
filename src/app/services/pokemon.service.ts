import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { Pokemon } from '../types/Pokemon';
import { Type } from '../types/Type';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  apiUrl: string = 'https://pokeapi.co/api/v2/pokemon';
  pokemons: Pokemon[];
  initPokemons: Pokemon[];
  searchDelay: any;

  constructor(private http: HttpClient) {
    this.pokemons = [];
    this.initPokemons = [];
    this.searchDelay = null;
  }

  getPokemons(): void {
    const promises = [];
    for (let i = 1; i <= 898; i++) {
      const url = `${this.apiUrl}/${i}`;
      promises.push(this.http.get(url));
    }
    forkJoin(promises).subscribe((data: any) => {
      const pokemons = data.map((p: Pokemon) => {
        const { id, name, types, stats, height, weight, sprites } = p;
        return {
          id,
          name,
          types,
          stats,
          height,
          weight,
          sprites,
        };
      });
      this.pokemons = pokemons;
      this.initPokemons = pokemons;
    });
  }

  toggleFavorite(id: number): void {
    this.pokemons = this.pokemons.map((pokemon: Pokemon) => {
      if (pokemon.id === id) pokemon.favorite = !Boolean(pokemon.favorite);

      return pokemon;
    });
  }

  getPokemon(id: string | null) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  handleSearch(e: Event) {
    if (this.searchDelay) clearInterval(this.searchDelay);
    this.searchDelay = setTimeout(() => {
      const value = (e.target as HTMLInputElement).value || '';
      if (value) {
        this.pokemons = this.pokemons.filter((p) => {
          return (
            p.name.includes(value) ||
            p.types.some((t: Type) => t.type.name.includes(value))
          );
        });
      } else {
        this.pokemons = [...this.initPokemons];
      }
    }, 500);
  }
}
