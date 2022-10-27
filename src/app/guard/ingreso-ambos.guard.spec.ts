import { TestBed } from '@angular/core/testing';

import { IngresoAmbosGuard } from './ingreso-ambos.guard';

describe('IngresoAmbosGuard', () => {
  let guard: IngresoAmbosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresoAmbosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
