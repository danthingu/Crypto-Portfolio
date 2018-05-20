/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GrabCryptoServiceService } from './grabCryptoService.service';

describe('Service: GrabCryptoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrabCryptoServiceService]
    });
  });

  it('should ...', inject([GrabCryptoServiceService], (service: GrabCryptoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
