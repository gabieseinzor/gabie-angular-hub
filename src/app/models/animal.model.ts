export type Species = 'chien' | 'chat' | 'lapin' | 'oiseau' | 'autre';

export interface Animal {
  id: number;
  name: string;
  species: Species;
  age: number;
  energyLevel: number;
  isAdopted: boolean;
}
