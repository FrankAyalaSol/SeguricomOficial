import { TestBed } from '@angular/core/testing';

import { AsignateSpecialistServiceService } from './asignate-specialist.service.service';

describe('AsignateSpecialistServiceService', () => {
  let service: AsignateSpecialistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignateSpecialistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
