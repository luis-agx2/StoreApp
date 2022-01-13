import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { userAuth } from '../interfaces/userAuth.interface';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  baseUrl: string = environment.baseUrl;
  exist: boolean = false;
  private userAuth: [userAuth | undefined, {} | undefined] = [undefined, undefined];

  get auth() {
    return { ...this.userAuth! }
  }

  constructor(
    private http: HttpClient
  ) { }

  public login(user: userAuth): Observable<userAuth> {

    let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');

    const object = JSON.stringify(user);

    //Here is the point!
    return this.http.post<userAuth>(`${this.baseUrl}/auth/login`, object, { headers: header })
      .pipe(
        tap((token) => {
          this.userAuth[0] = user;
          this.userAuth[1] = token;

          localStorage.setItem('token', JSON.stringify(token));
          localStorage.setItem('user', JSON.stringify(user));
        }
        )
      );
  }

  verificarAutenticacion(): Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false);
    }

    return of(true);
  }
}

