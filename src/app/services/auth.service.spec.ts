import { TestBed } from '@angular/core/testing';

import { AuthServicee } from './auth.service';

describe('AuthService', () => {
  let service: AuthServicee;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServicee);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
