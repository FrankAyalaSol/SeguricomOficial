import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDetalleClienteComponent } from './registrar-detalle-cliente.component';

describe('RegistrarDetalleClienteComponent', () => {
  let component: RegistrarDetalleClienteComponent;
  let fixture: ComponentFixture<RegistrarDetalleClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarDetalleClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarDetalleClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
