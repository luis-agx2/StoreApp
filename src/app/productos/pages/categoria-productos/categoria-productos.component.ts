import { Component, OnInit } from '@angular/core';
import { ProductsResponse } from '../../interfaces/productsResponse.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-categoria-productos',
  templateUrl: './categoria-productos.component.html',
  styleUrls: ['./categoria-productos.component.css']
})
export class CategoriaProductosComponent implements OnInit {

  productos: ProductsResponse[] = [];

  get listaCategorias(): string[] {
    return this.productoService.listaCategorias;
  }

  constructor(
    private productoService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productoService.getCategorias();
  }

  busqueda(categoria: string) {
    this.productos = [];
    this.productoService.getPorCategorias(categoria)
      .subscribe(data => {
        this.productos = data;
      });
  }

}
