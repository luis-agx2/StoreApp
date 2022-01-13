import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CarritosResponse } from '../../interfaces/carritosResponse.interface';

@Injectable({
    providedIn: 'root'
})

export class CarritosService {
    urlBase: string = environment.baseUrl;

    constructor(private http: HttpClient) { }

     getCarritos(): Observable<CarritosResponse[]> {
         return this.http.get<CarritosResponse[]>(`${this.urlBase}/carts`);
    }

     getCarrito(id: number): Observable<CarritosResponse> {
        return this.http.get<CarritosResponse>(`${this.urlBase}/carts/${id}`);
     }

    // getPorCategorias(categoria: string): Observable<ProductsResponse[]>{
    //     return this.http.get<ProductsResponse[]>(`${this.urlBase}/products/category/${categoria}`);
    // }

    // getCategorias() {
    //     this.http.get<string[]>(`${this.urlBase}/products/categories`)
    //         .subscribe(data => {
    //             this.categorias = data;
    //         });
    // }

    // public postProducto(producto: ProductsResponse): Observable<ProductsResponse> {

    //     let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');
    
    //     const object = JSON.stringify(producto);
    
    //     //Here is the point!
    //     return this.http.post<ProductsResponse>(`${this.urlBase}/products`, object, { headers: header });
    // }
}