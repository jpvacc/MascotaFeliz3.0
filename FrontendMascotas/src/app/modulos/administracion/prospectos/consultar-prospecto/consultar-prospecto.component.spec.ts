import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProspectoComponent } from './consultar-prospecto.component';

describe('ConsultarProspectoComponent', () => {
  let component: ConsultarProspectoComponent;
  let fixture: ComponentFixture<ConsultarProspectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarProspectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarProspectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
