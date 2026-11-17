import { Component, input, output } from '@angular/core';
import { Task } from '../../pages/exercises/todo-exercise/todo-exercise';

@Component({
  imports: [],
  selector: 'app-task-item',
  styleUrl: './task-item.css',
  templateUrl: './task-item.html',
})
export class TaskItem {
  task = input.required<Task>();
  toggled = output<number>();
  removed = output<number>();

  onToggle(): void {
    console.log('Tâche cochée, id =', this.task().id);
    this.toggled.emit(this.task().id);
  }
  onRemove(): void {
    console.log('Tâche supprimée, id =', this.task().id);
    this.removed.emit(this.task().id);
  }
}
