import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarEspecialistaComponent } from './asignar-especialista.component';

describe('AsignarEspecialistaComponent', () => {
  let component: AsignarEspecialistaComponent;
  let fixture: ComponentFixture<AsignarEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarEspecialistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
