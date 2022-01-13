import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeProductosComponent } from './pages/home-productos/home-productos.component';
import { AgregarProductosComponent } from './pages/agregar-productos/agregar-productos.component';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { CategoriaProductosComponent } from './pages/categoria-productos/categoria-productos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeProductosComponent,
    children: [
      {path: 'listado', component: ListaProductosComponent},
      {path: 'agregar', component: AgregarProductosComponent},
      {path: 'editar/:id', component: AgregarProductosComponent},
      {path: 'ver/:id', component: VerProductoComponent},
      {path: 'categorias', component: CategoriaProductosComponent},
      {path: '**', redirectTo: 'listado'}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ProductosRoutingModule { }
