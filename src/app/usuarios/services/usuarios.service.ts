import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment.prod';
import { UsuarioResponse } from '../interfaces/usuariosResponse.interface';

@Injectable({
    providedIn: 'root'
})

export class UsuariosService {
    urlBase: string = environment.baseUrl;
    categorias: string[] = []

    get listaCategorias(): string[]{
        return [...this.categorias];
    }

    constructor(private http: HttpClient) { }

    getUsuarios(): Observable<UsuarioResponse[]> {
        return this.http.get<UsuarioResponse[]>(`${this.urlBase}/users`);
    }

    getUsuario(id: number): Observable<UsuarioResponse> {
        return this.http.get<UsuarioResponse>(`${this.urlBase}/users/${id}`);
    }

    public postUsuario(usuario: UsuarioResponse): Observable<UsuarioResponse> {

        let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');
    
        const object = JSON.stringify(usuario);
    
        //Here is the point!
        return this.http.post<UsuarioResponse>(`${this.urlBase}/users`, object, { headers: header });
    }

    deleteUsuario(id: number): Observable<UsuarioResponse> {
        return this.http.delete<UsuarioResponse>(`${this.urlBase}/users/${id}`);
    }
}