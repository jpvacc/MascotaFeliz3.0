import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarProdServicioAMascotaComponent } from './asignar-prod-servicio-a-mascota.component';

describe('AsignarProdServicioAMascotaComponent', () => {
  let component: AsignarProdServicioAMascotaComponent;
  let fixture: ComponentFixture<AsignarProdServicioAMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarProdServicioAMascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarProdServicioAMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
