import { TestBed } from '@angular/core/testing';

import { IngresadoprofesorGuard } from './ingresadoprofesor.guard';

describe('IngresadoprofesorGuard', () => {
  let guard: IngresadoprofesorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresadoprofesorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
