import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { AgregarUsuarioComponent } from './pages/agregar-usuario/agregar-usuario.component';
import { VerUsuarioComponent } from './pages/ver-usuario/ver-usuario.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { HomeUsuariosComponent } from './pages/home-usuarios/home-usuarios.component';



@NgModule({
  declarations: [
    ListaUsuariosComponent,
    AgregarUsuarioComponent,
    VerUsuarioComponent,
    HomeUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
