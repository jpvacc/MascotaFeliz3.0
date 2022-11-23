import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentififcacionComponent } from './identififcacion.component';

describe('IdentififcacionComponent', () => {
  let component: IdentififcacionComponent;
  let fixture: ComponentFixture<IdentififcacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentififcacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentififcacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
