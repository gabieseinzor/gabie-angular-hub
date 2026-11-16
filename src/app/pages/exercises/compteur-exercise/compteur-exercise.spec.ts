import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompteurExercise } from './compteur-exercise';

describe('CompteurExercise', () => {
  let component: CompteurExercise;
  let fixture: ComponentFixture<CompteurExercise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompteurExercise],
    }).compileComponents();

    fixture = TestBed.createComponent(CompteurExercise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
