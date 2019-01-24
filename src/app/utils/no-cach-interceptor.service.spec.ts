import { TestBed } from '@angular/core/testing';

import { NoCachInterceptorService } from './no-cach-interceptor.service';

describe('NoCachInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoCachInterceptorService = TestBed.get(NoCachInterceptorService);
    expect(service).toBeTruthy();
  });
});
