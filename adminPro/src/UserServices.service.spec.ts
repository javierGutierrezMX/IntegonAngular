/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserServicesService } from './UserServices.service';

describe('Service: UserServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserServicesService]
    });
  });

  it('should ...', inject([UserServicesService], (service: UserServicesService) => {
    expect(service).toBeTruthy();
  }));
});
