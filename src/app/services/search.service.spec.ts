import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;
  let httpSpy: jasmine.SpyObj<HttpClient>;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new SearchService(httpSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
