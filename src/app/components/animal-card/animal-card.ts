import { Component, input, computed } from '@angular/core';
import { Species } from '../../models/animal.model';

const EMOJIS: Record<Species, string> = {
  chien: '🐶',
  chat: '🐱',
  lapin: '🐰',
  oiseau: '🦜',
  autre: '🐾',
};

@Component({
  selector: 'app-animal-card',
  styleUrl: './animal-card.css',
  templateUrl: './animal-card.html',
})
export class AnimalCard {
  name = input.required<string>();
  species = input.required<Species>();
  age = input<number>(0);
  energyLevel = input<number>(50);
  isAdopted = input<boolean>(false);

  emoji = computed(() => EMOJIS[this.species()]);

  ageLabel = computed(() => {
    const age = this.age();

    if (age < 0) {
      return 'Âge inconnu';
    } else if (age === 0 || age === 1) {
      return `${age} an`;
    } else {
      return `${age} ans`;
    }
  });
}
