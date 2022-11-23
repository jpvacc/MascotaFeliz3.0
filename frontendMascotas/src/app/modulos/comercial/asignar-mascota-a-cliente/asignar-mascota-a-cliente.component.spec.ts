import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarMascotaAClienteComponent } from './asignar-mascota-a-cliente.component';

describe('AsignarMascotaAClienteComponent', () => {
  let component: AsignarMascotaAClienteComponent;
  let fixture: ComponentFixture<AsignarMascotaAClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarMascotaAClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarMascotaAClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
