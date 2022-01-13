import { Component, OnInit } from '@angular/core';
import { ProductsResponse } from '../../interfaces/productsResponse.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit {
  valor: string = '';
  mostrar: boolean = false;
  mensaje: string = '';
  estilos: string = '';

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
    if (
      !this.producto.title ||
      !this.producto.price ||
      !this.producto.description ||
      !this.producto.image ||
      !this.producto.category
    ) {
      this.estilos = 'alert alert-danger col-8';
      this.mensaje = 'Asegurate de llenar todos los campos';
      this.mostrar = true;
      return;
    }

    this.productoService.postProducto(this.producto)
      .subscribe(data => {
        this.estilos = 'alert alert-primary col-8';
        this.mensaje = 'Producto Registrado';
        this.mostrar = true;
        console.log(data);
      });

    setTimeout(() => {
      this.mostrar = false
    }, 2000);

    this.producto = {
      title: '',
      price: 0,
      description: '',
      image: '',
      category: ''
    }
  }

  capturar() {
    this.producto.category = this.valor;
  }
}
