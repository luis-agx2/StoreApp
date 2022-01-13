import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosCarritoComponent } from './resultados-carrito.component';

describe('ResultadosCarritoComponent', () => {
  let component: ResultadosCarritoComponent;
  let fixture: ComponentFixture<ResultadosCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
