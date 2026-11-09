import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextInterpolationExercise } from './text-interpolation-exercise';

describe('TextInterpolationExercise', () => {
  let component: TextInterpolationExercise;
  let fixture: ComponentFixture<TextInterpolationExercise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInterpolationExercise],
    }).compileComponents();

    fixture = TestBed.createComponent(TextInterpolationExercise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
