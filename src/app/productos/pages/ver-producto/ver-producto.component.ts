import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { switchMap } from "rxjs/operators";
import { ProductsResponse } from '../../interfaces/productsResponse.interface';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {
  producto!: ProductsResponse;

  constructor(
    private productService: ProductsService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activedRoute.params
      .pipe(
        switchMap(({ id }) => this.productService.getProducto(id))
      )
      .subscribe(data => {
        this.producto = data;
      })
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

  eliminarProducto(){
    this.activedRoute.params
      .pipe(
        switchMap(({ id }) => this.productService.deleteProducto(id))
      )
      .subscribe(data => {
        this.producto = data;
        this.router.navigate(['/productos']);
      })
  }
}
