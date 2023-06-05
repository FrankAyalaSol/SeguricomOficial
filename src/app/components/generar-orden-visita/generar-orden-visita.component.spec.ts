import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarOrdenVisitaComponent } from './generar-orden-visita.component';

describe('GenerarOrdenVisitaComponent', () => {
  let component: GenerarOrdenVisitaComponent;
  let fixture: ComponentFixture<GenerarOrdenVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarOrdenVisitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarOrdenVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
