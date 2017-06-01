import { TestBed, inject } from '@angular/core/testing';

import { AccessGuardService } from './access-guard.service';

describe('AccessGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessGuardService]
    });
  });

  it('should ...', inject([AccessGuardService], (service: AccessGuardService) => {
    expect(service).toBeTruthy();
  }));
});
