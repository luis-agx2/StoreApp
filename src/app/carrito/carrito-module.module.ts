import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCarritosComponent } from './pages/lista-carritos/lista-carritos.component';
import { VerCarritoComponent } from './pages/ver-carrito/ver-carrito.component';
import { CarritoRoutingModule } from './carrito-routing.module';
import { HomeCarritoComponent } from './pages/home-carrito/home-carrito.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarCarritoComponent } from './componentes/sidebar-carrito/sidebar-carrito.component';
import { ResultadosCarritoComponent } from './componentes/resultados-carrito/resultados-carrito.component';



@NgModule({
  declarations: [
    ListaCarritosComponent,
    VerCarritoComponent,
    HomeCarritoComponent,
    SidebarCarritoComponent,
    ResultadosCarritoComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    SharedModule
  ]
})
export class CarritoModule { }
