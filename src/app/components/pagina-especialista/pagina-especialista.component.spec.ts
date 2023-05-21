import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEspecialistaComponent } from './pagina-especialista.component';

describe('PaginaEspecialistaComponent', () => {
  let component: PaginaEspecialistaComponent;
  let fixture: ComponentFixture<PaginaEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaEspecialistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
