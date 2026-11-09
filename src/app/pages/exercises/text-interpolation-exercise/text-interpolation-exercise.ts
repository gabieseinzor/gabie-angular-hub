import { Component } from '@angular/core';
interface User {
  firstName: string;
  lastName: string;
  role: string;
}
@Component({
  imports: [],
  selector: 'app-text-interpolation-exercise',
  styleUrl: './text-interpolation-exercise.css',
  templateUrl: './text-interpolation-exercise.html',
})
export class TextInterpolationExercise {
  // données de l'exercice
  maxScore: number = 20;
  currentScore: number = 15;
  isLoggedIn: boolean = false;
  
  user: User = {
    firstName: 'Alexandre',
    lastName: 'DUPONT',
    role : 'Dev'
  }
  getFullName(): string{
  return `${this.user.firstName} ${this.user.lastName}`;

  }
skills: string[] =['Angular 22', 'TypeScript', 'DaisyUI'];

}
