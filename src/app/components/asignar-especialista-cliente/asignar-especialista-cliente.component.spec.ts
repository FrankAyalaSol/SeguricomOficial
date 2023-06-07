import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarEspecialistaClienteComponent } from './asignar-especialista-cliente.component';

describe('AsignarEspecialistaClienteComponent', () => {
  let component: AsignarEspecialistaClienteComponent;
  let fixture: ComponentFixture<AsignarEspecialistaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarEspecialistaClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarEspecialistaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
