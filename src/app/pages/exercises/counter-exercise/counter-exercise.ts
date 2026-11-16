import { Component, computed, signal } from '@angular/core';
@Component({
  imports: [],
  selector: 'app-counter-exercise',
  styleUrl: './counter-exercise.css',
  templateUrl: './counter-exercise.html',
})
export class CounterExercise {
  count = signal<number>(0);
  
   message = computed(() => { 

    if(this.count()<=0){
      return "Compteur à zéro"
    } else if (this.count() >= 10){
      return "Maximum atteint";
    } else{
      return `Valeur : ${this.count()}`;
    }
   });

  pourcentage = computed(() => (this.count()/10) *100);

  increment(): void{
    this.count.update((v)=>v+1);
  }
  decrement(): void{
    this.count.update((v)=>v-1);
  }

  reset(): void{
    this.count.set(0);
  }
}
