import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarEspecialistaComponent } from './visualizar-especialista.component';

describe('VisualizarEspecialistaComponent', () => {
  let component: VisualizarEspecialistaComponent;
  let fixture: ComponentFixture<VisualizarEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarEspecialistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
