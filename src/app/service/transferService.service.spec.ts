/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransferServiceService } from './transferService.service';

describe('Service: TransferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransferServiceService]
    });
  });

  it('should ...', inject([TransferServiceService], (service: TransferServiceService) => {
    expect(service).toBeTruthy();
  }));
});
