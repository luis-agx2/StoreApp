import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCarritosComponent } from './pages/lista-carritos/lista-carritos.component';
import { VerCarritoComponent } from './pages/ver-carrito/ver-carrito.component';
import { HomeCarritoComponent } from './pages/home-carrito/home-carrito.component';

const routes: Routes = [
  {
    path: '',
    component: HomeCarritoComponent,
    children: [
      {path: 'listado', component: ListaCarritosComponent},
      {path: 'ver/:id', component: VerCarritoComponent},
      {path: '**', redirectTo: 'listado'}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CarritoRoutingModule { }
