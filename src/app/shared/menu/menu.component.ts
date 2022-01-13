import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userAuth } from 'src/app/auth/interfaces/userAuth.interface';
import { AuthService } from '../../auth/services/auth-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user!: userAuth;

  get auth(): [userAuth | undefined, {} | undefined] {
    return this.authService.auth;
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') != undefined) {
      this.user = JSON.parse(localStorage.getItem('user')!);
    }
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    this.router.navigate(['./auth/login']);
  }
}
