import { TestBed } from '@angular/core/testing';

import { MascotaplanService } from './mascotaplan.service';

describe('MascotaplanService', () => {
  let service: MascotaplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascotaplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
