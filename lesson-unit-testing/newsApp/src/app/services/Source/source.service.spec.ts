import { TestBed } from '@angular/core/testing';

import { SourceService } from './source.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: SourceService = TestBed.get(SourceService);
    expect(service).toBeTruthy();
  });
});
