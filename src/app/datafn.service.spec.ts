import { TestBed, inject } from '@angular/core/testing';

import { DatafnService } from './datafn.service';

describe('DatafnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatafnService]
    });
  });

  it('should be created', inject([DatafnService], (service: DatafnService) => {
    expect(service).toBeTruthy();
  }));
});
