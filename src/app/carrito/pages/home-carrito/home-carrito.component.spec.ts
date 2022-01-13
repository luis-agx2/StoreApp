import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarritoComponent } from './home-carrito.component';

describe('HomeCarritoComponent', () => {
  let component: HomeCarritoComponent;
  let fixture: ComponentFixture<HomeCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
