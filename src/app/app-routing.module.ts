import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageErrorComponent } from './shared/page-error/page-error.component';
import { UsuariosModule } from './usuarios/usuarios-module.module';

const routes: Routes = [
  {
    path: 'carritos',
    loadChildren: () => import('./carrito/carrito-module.module').then(m => m.CarritoModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module.module').then(m => m.AuthModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos-module.module').then(m => m.ProductosModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios-module.module').then(m => m.UsuariosModule)
  },
  {
    path: '404',
    component: PageErrorComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
