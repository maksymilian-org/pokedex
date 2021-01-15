import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../types/Pokemon';

@Pipe({
  name: 'favorites',
})
export class FavoritesPipe implements PipeTransform {
  transform(value: Pokemon[]): Pokemon[] {
    return value.filter((item: Pokemon) => item.favorite) || [];
  }
}
