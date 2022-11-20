import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProductoServicioComponent } from './consultar-producto-servicio.component';

describe('ConsultarProductoServicioComponent', () => {
  let component: ConsultarProductoServicioComponent;
  let fixture: ComponentFixture<ConsultarProductoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarProductoServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarProductoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
