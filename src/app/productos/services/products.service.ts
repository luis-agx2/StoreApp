import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ProductsResponse } from '../interfaces/productsResponse.interface';

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    urlBase: string = environment.baseUrl;
    categorias: string[] = []

    get listaCategorias(): string[]{
        return [...this.categorias];
    }

    constructor(private http: HttpClient) { }

    getProductos(): Observable<ProductsResponse[]> {
        return this.http.get<ProductsResponse[]>(`${this.urlBase}/products`);
    }

    getProducto(id: number): Observable<ProductsResponse> {
        return this.http.get<ProductsResponse>(`${this.urlBase}/products/${id}`);
    }

    getPorCategorias(categoria: string): Observable<ProductsResponse[]>{
        return this.http.get<ProductsResponse[]>(`${this.urlBase}/products/category/${categoria}`);
    }

    getCategorias() {
        this.http.get<string[]>(`${this.urlBase}/products/categories`)
            .subscribe(data => {
                this.categorias = data;
            });
    }

    public postProducto(producto: ProductsResponse): Observable<ProductsResponse> {

        let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');
    
        const object = JSON.stringify(producto);
    
        //Here is the point!
        return this.http.post<ProductsResponse>(`${this.urlBase}/products`, object, { headers: header });
    }
}