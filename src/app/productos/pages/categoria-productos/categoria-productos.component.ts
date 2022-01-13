import { Component, OnInit } from '@angular/core';
import { ProductsResponse } from '../../interfaces/productsResponse.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-categoria-productos',
  templateUrl: './categoria-productos.component.html',
  styleUrls: ['./categoria-productos.component.css']
})
export class CategoriaProductosComponent implements OnInit {

  categoriaActiva: string = '';

  productos: ProductsResponse[] = [];

  get listaCategorias(): string[] {
    return this.productoService.listaCategorias;
  }

  constructor(
    private productoService: ProductsService
  ) { }

  getClaseCss(categoria: string):string{
    return (categoria === this.categoriaActiva) ? 'badge bg-secondary mt-3 m-1' : 'badge bg-primary mt-3 m-1';
  }

  ngOnInit(): void {
    this.productoService.getCategorias();
  }



  busqueda(categoria: string) {

    if(categoria === this.categoriaActiva){return;}

    this.categoriaActiva = categoria;

    this.productos = [];
    this.productoService.getPorCategorias(categoria)
      .subscribe(data => {
        this.productos = data;
      });
  }

}
