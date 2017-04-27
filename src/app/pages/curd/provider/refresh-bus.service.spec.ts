import { TestBed, inject } from '@angular/core/testing';

import { RefreshBusService } from './refresh-bus.service';

describe('RefreshBusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefreshBusService]
    });
  });

  it('should ...', inject([RefreshBusService], (service: RefreshBusService) => {
    expect(service).toBeTruthy();
  }));
});
