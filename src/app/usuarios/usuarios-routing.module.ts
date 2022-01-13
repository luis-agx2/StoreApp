import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeUsuariosComponent } from './pages/home-usuarios/home-usuarios.component';
import { ListaProductosComponent } from '../productos/pages/lista-productos/lista-productos.component';
import { AgregarUsuarioComponent } from './pages/agregar-usuario/agregar-usuario.component';
import { VerUsuarioComponent } from './pages/ver-usuario/ver-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeUsuariosComponent,
    children: [
      {path: 'listado', component: ListaProductosComponent},
      {path: 'agregar', component: AgregarUsuarioComponent},
      {path: 'ver/:id', component: VerUsuarioComponent},
      {path: '**', redirectTo: 'listado'}
    ]
  }
]

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class UsuariosRoutingModule { }
