import { Component, OnInit } from '@angular/core';
import { CarritosResponse } from '../../interfaces/carritosResponse.interface';
import { CarritosService } from '../../services/carritos.service';

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
