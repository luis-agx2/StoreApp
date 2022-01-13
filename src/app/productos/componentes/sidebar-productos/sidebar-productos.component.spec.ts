import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProductosComponent } from './sidebar-productos.component';

describe('SidebarProductosComponent', () => {
  let component: SidebarProductosComponent;
  let fixture: ComponentFixture<SidebarProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
