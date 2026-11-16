import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterExercise } from './counter-exercise';

describe('CounterExercise', () => {
  let component: CounterExercise;
  let fixture: ComponentFixture<CounterExercise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterExercise],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterExercise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
