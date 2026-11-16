import { Component, OnDestroy, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-simple-exercise',
  imports: [],
  templateUrl: './observable-simple-exercise.html',
  styleUrl: './observable-simple-exercise.css',
})
export class ObservableSimpleExercise implements OnDestroy {
  numbers = signal<number[]>([]);
  paused = signal(false);
  private subscription: Subscription | null = null;

  start(): void {
    if (this.subscription) return;
    console.log('Démarrage du générateur');
    this.subscription = interval(1000).subscribe(() => {
      // crée un nombre aléatoire
      const nombre = Math.floor(Math.random() * 100) + 1;
      console.log('Nombre généré :', nombre);
      // ajoute la valeur dans un nouveau tableau
      this.numbers.update((liste) => [...liste, nombre]);
    });
  }

  pauseResume(): void {
    // inverse la valeur de paused()
    this.paused.update((valeur) => !valeur);
    if (this.paused()) {
      console.log('Générateur en pause');

      this.stopSubscription();
    } else {
      console.log('Reprise du générateur');
      this.start();
    }
  }

  stop(): void {
    console.log('Arrêt du générateur');
    this.stopSubscription();
    this.numbers.set([]);
    this.paused.set(false);
  }

  private stopSubscription(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  ngOnDestroy(): void {
    console.log('Destruction du composant');
    this.stopSubscription();
  }
}
