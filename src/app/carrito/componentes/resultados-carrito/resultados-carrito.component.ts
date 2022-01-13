import { Component, Input, OnInit } from '@angular/core';
import { UsuarioResponse } from 'src/app/usuarios/interfaces/usuariosResponse.interface';
import { UsuariosService } from '../../../usuarios/services/usuarios.service';

@Component({
  selector: 'app-resultados-carrito',
  templateUrl: './resultados-carrito.component.html',
  styleUrls: ['./resultados-carrito.component.css']
})
export class ResultadosCarritoComponent implements OnInit {
  
  @Input() productos: any[] = []
  
  constructor(  ) { }

  ngOnInit(): void {
  }

}
