import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment.prod';
import { CarritosResponse } from "../interfaces/carritosResponse.interface";

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
}