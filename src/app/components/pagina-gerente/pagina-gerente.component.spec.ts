import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGerenteComponent } from './pagina-gerente.component';

describe('PaginaGerenteComponent', () => {
  let component: PaginaGerenteComponent;
  let fixture: ComponentFixture<PaginaGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaGerenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
