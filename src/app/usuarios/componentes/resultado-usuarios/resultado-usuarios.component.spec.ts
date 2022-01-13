import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoUsuariosComponent } from './resultado-usuarios.component';

describe('ResultadoUsuariosComponent', () => {
  let component: ResultadoUsuariosComponent;
  let fixture: ComponentFixture<ResultadoUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
