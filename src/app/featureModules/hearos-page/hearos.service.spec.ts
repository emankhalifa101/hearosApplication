import { TestBed } from '@angular/core/testing';

import { HearosService } from './hearos.service';

describe('HearosService', () => {
  let service: HearosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HearosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
