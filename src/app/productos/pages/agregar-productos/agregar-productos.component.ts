import { Component, OnInit } from '@angular/core';
import { ProductsResponse } from '../../interfaces/productsResponse.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit {
  producto: ProductsResponse = {
    title: '',
    price: 0,
    description: '',
    image: '',
    category: ''
  }

  get listaCategorias(): string[] {
    return this.productoService.listaCategorias;
  }

  constructor(
    private productoService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productoService.getCategorias();
  }

  insertarProducto() {
    this.productoService.postProducto(this.producto)
      .subscribe(data => {
        console.log(data);
      });

    this.producto = {
      title: '',
      price: 0,
      description: '',
      image: '',
      category: ''
    }
  }
}
