import { TestBed } from '@angular/core/testing';

import { YufootApiService } from './yufoot-api.service';

describe('YufootApiService', () => {
  let service: YufootApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YufootApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
