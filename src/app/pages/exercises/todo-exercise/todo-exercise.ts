import { Component, computed, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { TaskItem } from '../../../components/task-item/task-item';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}
@Component({
  imports: [FormField, TaskItem],
  selector: 'app-todo-exercise',
  styleUrl: './todo-exercise.css',
  templateUrl: './todo-exercise.html',
})
export class TodoExercise {
  tasks = signal<Task[]>([]);

  nextId = 1;

  total = computed(() => this.tasks().length);

  remaining = computed(() => {
    return this.tasks().filter((task) => !task.done).length;
  });

  allDone = computed(() => this.total() > 0 && this.remaining() === 0);

  newTaskModel = signal({ title: '' });
  newTaskForm = form(this.newTaskModel);

  addTask(): void {
    const title = this.newTaskForm.title().value().trim();
    if (title === '') return;
    this.tasks.update((liste) => [...liste, { id: this.nextId, title, done: false }]);
    console.log(this.tasks());
    this.nextId++;
    this.newTaskModel.set({ title: '' });
  }

  toggle(id: number): void {
    this.tasks.update((current) =>
      current.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    );
  }

  remove(id: number): void {
    this.tasks.update((current) => current.filter((task) => task.id !== id));
  }

  clearDone(): void {
    this.tasks.update((current) => current.filter((task) => !task.done));
  }
}
