import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCarritosComponent } from './pages/lista-carritos/lista-carritos.component';
import { VerCarritoComponent } from './pages/ver-carrito/ver-carrito.component';
import { CarritoRoutingModule } from './carrito-routing.module';
import { HomeCarritoComponent } from './pages/home-carrito/home-carrito.component';



@NgModule({
  declarations: [
    ListaCarritosComponent,
    VerCarritoComponent,
    HomeCarritoComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule
  ]
})
export class CarritoModule { }
