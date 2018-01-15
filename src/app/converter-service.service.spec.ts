import { TestBed, inject } from '@angular/core/testing';

import { ConverterServiceService } from './converter-service.service';

describe('ConverterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConverterServiceService]
    });
  });

  it('should be created', inject([ConverterServiceService], (service: ConverterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
