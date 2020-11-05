import { TestBed } from '@angular/core/testing';

import { AuthreciproqueGuard } from './authreciproque.guard';

describe('AuthreciproqueGuard', () => {
  let guard: AuthreciproqueGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthreciproqueGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
