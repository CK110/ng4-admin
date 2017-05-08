import { TestBed, inject } from '@angular/core/testing';

import { CustomEventBusService } from './custom-event-bus.service';

describe('CustomEventBusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomEventBusService]
    });
  });

  it('should ...', inject([CustomEventBusService], (service: CustomEventBusService) => {
    expect(service).toBeTruthy();
  }));
});
