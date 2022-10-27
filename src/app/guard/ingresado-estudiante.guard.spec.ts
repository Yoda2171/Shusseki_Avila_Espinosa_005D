import { TestBed } from '@angular/core/testing';

import { IngresadoEstudianteGuard } from './ingresado-estudiante.guard';

describe('IngresadoEstudianteGuard', () => {
  let guard: IngresadoEstudianteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresadoEstudianteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
