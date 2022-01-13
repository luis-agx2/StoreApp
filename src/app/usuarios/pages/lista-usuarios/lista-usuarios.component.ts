import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioResponse } from '../../interfaces/usuariosResponse.interface';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: UsuarioResponse[] = [];

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.usuariosService.getUsuarios()
    .subscribe(data =>{
      this.usuarios = data;
    });
  }

}
