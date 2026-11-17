import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoExercise } from './todo-exercise';

describe('TodoExercise', () => {
  let component: TodoExercise;
  let fixture: ComponentFixture<TodoExercise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoExercise],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoExercise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
