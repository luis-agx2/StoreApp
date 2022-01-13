import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { AgregarUsuarioComponent } from './pages/agregar-usuario/agregar-usuario.component';
import { VerUsuarioComponent } from './pages/ver-usuario/ver-usuario.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { HomeUsuariosComponent } from './pages/home-usuarios/home-usuarios.component';
import { SidebarClientesComponent } from './componentes/sidebar-clientes/sidebar-clientes.component';
import { ResultadoUsuariosComponent } from './componentes/resultado-usuarios/resultado-usuarios.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListaUsuariosComponent,
    AgregarUsuarioComponent,
    VerUsuarioComponent,
    HomeUsuariosComponent,
    SidebarClientesComponent,
    ResultadoUsuariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
