import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCarritoComponent } from './sidebar-carrito.component';

describe('SidebarCarritoComponent', () => {
  let component: SidebarCarritoComponent;
  let fixture: ComponentFixture<SidebarCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
