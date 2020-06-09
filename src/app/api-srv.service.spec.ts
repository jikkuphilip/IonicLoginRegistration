import { TestBed } from '@angular/core/testing';

import { ApiSrvService } from './api-srv.service';

describe('ApiSrvService', () => {
  let service: ApiSrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
