import { TestBed } from '@angular/core/testing';

import { CheckinMapService } from './checkin-map.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CheckinMapService', () => {
  let service: CheckinMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CheckinMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
