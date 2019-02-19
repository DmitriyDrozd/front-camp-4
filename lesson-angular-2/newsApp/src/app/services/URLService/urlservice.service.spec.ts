import { TestBed } from '@angular/core/testing';

import { URLServiceService } from './urlservice.service';

describe('URLServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: URLServiceService = TestBed.get(URLServiceService);
    expect(service).toBeTruthy();
  });
});
