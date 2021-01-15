import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    const searchEl: HTMLInputElement | null = document.querySelector('.search');
    window.addEventListener('keyup', (e) => {
      if (e.key === '/') {
        searchEl && searchEl.focus();
      }
    });
  }
}
