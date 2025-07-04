import { TestBed } from '@angular/core/testing';

import { NestedMSGService } from './nested-msg.service';

describe('NestedMSGService', () => {
  let service: NestedMSGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NestedMSGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
