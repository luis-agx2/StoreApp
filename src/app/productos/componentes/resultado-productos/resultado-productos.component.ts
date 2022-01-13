import { Component, Input, OnInit } from '@angular/core';
import { ProductsResponse } from '../../interfaces/productsResponse.interface';

@Component({
  selector: 'app-resultado-productos',
  templateUrl: './resultado-productos.component.html',
  styleUrls: ['./resultado-productos.component.css']
})
export class ResultadoProductosComponent implements OnInit {

  @Input() productos: ProductsResponse[] = []
  constructor() { }

  ngOnInit(): void {
  }

  evaluar(rating: number): string {
    let htmlBase: string = '';

    for (let i of [1, 2, 3, 4, 5]) {
      if (rating >= 1) {
        htmlBase = htmlBase + '<i class="bi bi-star-fill"></i>';
        rating--;
      } else if (rating > 0) {
        htmlBase = htmlBase + '<i class="bi bi-star-half"></i>';
        rating--;
      } else {
        htmlBase = htmlBase + '<i class="bi bi-star"></i>';
      }
    }

    return htmlBase;
  }

}
