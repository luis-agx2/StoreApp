import { Component, OnInit } from '@angular/core';
import { CarritosService } from '../services/carritos.service';
import { UsuariosService } from '../../../usuarios/services/usuarios.service';
import { CarritosResponse } from '../../interfaces/carritosResponse.interface';

@Component({
  selector: 'app-lista-carritos',
  templateUrl: './lista-carritos.component.html',
  styleUrls: ['./lista-carritos.component.css']
})
export class ListaCarritosComponent implements OnInit {
  productos: CarritosResponse[] = [];

  constructor(
    private carritosService: CarritosService
  ) { }

  ngOnInit(): void {
    this.carritosService.getCarritos()
      .subscribe(data => {
        this.productos = data;
      });
  }

}
