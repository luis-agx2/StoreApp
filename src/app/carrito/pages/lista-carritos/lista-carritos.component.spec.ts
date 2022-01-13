import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCarritosComponent } from './lista-carritos.component';

describe('ListaCarritosComponent', () => {
  let component: ListaCarritosComponent;
  let fixture: ComponentFixture<ListaCarritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCarritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCarritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
