import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { PageErrorComponent } from './shared/page-error/page-error.component';
import { UsuariosModule } from './usuarios/usuarios-module.module';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoginComponent } from './auth/pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
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
    loadChildren: () => import('./productos/productos-module.module').then(m => m.ProductosModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
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
