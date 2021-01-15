import { Type } from './Type';

export interface Pokemon {
  id: number;
  name: string;
  types: Type[];
  stats: any[];
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  favorite?: boolean;
}
