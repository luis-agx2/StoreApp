import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth-service.service';

import { userAuth } from '../../interfaces/userAuth.interface';
import { User } from '../../interfaces/User';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[] = [];
  error: boolean = false;

  user: userAuth = {
    username: 'johnd',
    password: 'm38rmF$'
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  auth() {
    this.authService.login(this.user)
      .subscribe(data => {
        if (data) {
          this.router.navigate(['/productos']);
        }
      },
        (err => {
          this.mostrarAlerta();
        }));
  }

  mostrarAlerta() {
    this.error = true;
    setTimeout(() => {
      this.error = false
    }, 1000);

    this.user = {
      username: '',
      password: ''
    }
  }
}
