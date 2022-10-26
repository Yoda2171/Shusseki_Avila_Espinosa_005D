import { TestBed } from '@angular/core/testing';

import { IngresadoProfesorGuard } from './ingresado-profesor.guard';

describe('IngresadoProfesorGuard', () => {
  let guard: IngresadoProfesorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresadoProfesorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
