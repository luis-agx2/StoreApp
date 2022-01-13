import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoProductosComponent } from './resultado-productos.component';

describe('ResultadoProductosComponent', () => {
  let component: ResultadoProductosComponent;
  let fixture: ComponentFixture<ResultadoProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
