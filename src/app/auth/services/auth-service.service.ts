import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userAuth } from '../interfaces/userAuth.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  baseUrl: string = environment.baseUrl;
  exist: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  public login(user: userAuth): Observable<userAuth> {

    let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');

    const object = JSON.stringify(user);

    //Here is the point!
    return this.http.post<userAuth>(`${this.baseUrl}/auth/login`, object, { headers: header });
  }
}

