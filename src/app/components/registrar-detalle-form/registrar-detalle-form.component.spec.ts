import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDetalleFormComponent } from './registrar-detalle-form.component';

describe('RegistrarDetalleFormComponent', () => {
  let component: RegistrarDetalleFormComponent;
  let fixture: ComponentFixture<RegistrarDetalleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarDetalleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarDetalleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
