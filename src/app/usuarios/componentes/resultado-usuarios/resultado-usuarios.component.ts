import { Component, Input, OnInit } from '@angular/core';
import { UsuarioResponse } from '../../interfaces/usuariosResponse.interface';

@Component({
  selector: 'app-resultado-usuarios',
  templateUrl: './resultado-usuarios.component.html',
  styleUrls: ['./resultado-usuarios.component.css']
})
export class ResultadoUsuariosComponent implements OnInit {
  @Input() usuarios: UsuarioResponse[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
