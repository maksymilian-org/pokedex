import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/types/Pokemon';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input()
  pokemon!: Pokemon;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}

  toggleFavorite(e: Event, id: number) {
    e.preventDefault();
    e.stopPropagation();
    this.pokemonService.toggleFavorite(id);
  }
}
