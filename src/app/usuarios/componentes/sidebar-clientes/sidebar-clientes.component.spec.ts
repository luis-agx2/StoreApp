import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarClientesComponent } from './sidebar-clientes.component';

describe('SidebarClientesComponent', () => {
  let component: SidebarClientesComponent;
  let fixture: ComponentFixture<SidebarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
