import { TestBed } from '@angular/core/testing';

import { MascotaUsuarioService } from './mascota-usuario.service';

describe('MascotaUsuarioService', () => {
  let service: MascotaUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascotaUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
