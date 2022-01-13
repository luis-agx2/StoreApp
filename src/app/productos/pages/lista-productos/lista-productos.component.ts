import { Component, OnInit } from '@angular/core';
import { ProductsResponse } from '../../interfaces/productsResponse.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: ProductsResponse[] = [];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProductos()
      .subscribe((data) => {
        this.productos = data;
      });
  }
}
