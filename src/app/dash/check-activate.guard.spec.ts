import { TestBed, async, inject } from '@angular/core/testing';

import { CheckActivateGuard } from './check-activate.guard';

describe('CheckActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckActivateGuard]
    });
  });

  it('should ...', inject([CheckActivateGuard], (guard: CheckActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
