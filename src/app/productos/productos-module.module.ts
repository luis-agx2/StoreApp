import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarProductosComponent } from './pages/agregar-productos/agregar-productos.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { CategoriaProductosComponent } from './pages/categoria-productos/categoria-productos.component';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';
import { HomeProductosComponent } from './pages/home-productos/home-productos.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ResultadoProductosComponent } from './componentes/resultado-productos/resultado-productos.component';
import { SidebarProductosComponent } from './componentes/sidebar-productos/sidebar-productos.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarProductosComponent,
    ListaProductosComponent,
    CategoriaProductosComponent,
    VerProductoComponent,
    HomeProductosComponent,
    ResultadoProductosComponent,
    SidebarProductosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
