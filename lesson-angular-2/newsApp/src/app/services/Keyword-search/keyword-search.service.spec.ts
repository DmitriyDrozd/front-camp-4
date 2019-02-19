import { TestBed } from '@angular/core/testing';

import { KeywordSearchService } from './keyword-search.service';

describe('KeywordSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeywordSearchService = TestBed.get(KeywordSearchService);
    expect(service).toBeTruthy();
  });
});
