import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/productos/services/products.service';
import { switchMap } from "rxjs/operators";
import { CarritosResponse } from '../../interfaces/carritosResponse.interface';
import { UsuariosService } from '../../../usuarios/services/usuarios.service';
import { UsuarioResponse } from '../../../usuarios/interfaces/usuariosResponse.interface';
import { ProductsResponse } from '../../../productos/interfaces/productsResponse.interface';
import { CarritosService } from '../../services/carritos.service';

@Component({
  selector: 'app-ver-carrito',
  templateUrl: './ver-carrito.component.html',
  styleUrls: ['./ver-carrito.component.css']
})
export class VerCarritoComponent implements OnInit {

  carrito!: CarritosResponse;
  usuario!: UsuarioResponse;
  productos: string[] = [];
  myDictionary: { [index: number]: any; } = {};


  constructor(
    private carritoService: CarritosService,
    private usuariosService: UsuariosService,
    private productosService: ProductsService,
    private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params
      .pipe(
        switchMap(({ id }) => this.carritoService.getCarrito(id))
      )
      .subscribe(data => {
        this.carrito = data;
        this.usuariosService.getUsuario(data.userId)
          .subscribe(usuario =>{
            this.usuario = usuario;
            this.getProductos(this.carrito);
          });
      })
  }

  getProductos(carrito: CarritosResponse){
    this.productos = [];
    carrito.products.map(data =>{
      this.productosService.getProducto(data.productId)
        .subscribe(producto => {
          this.productos.push(producto.title);
        })
    })
  }

}
