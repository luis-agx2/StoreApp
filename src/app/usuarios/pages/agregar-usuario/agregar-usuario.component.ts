import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address, Name, User, Geolocation } from 'src/app/auth/interfaces/User';
import { AuthService } from 'src/app/auth/services/auth-service.service';
import { UsuarioResponse } from '../../interfaces/usuariosResponse.interface';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  newUserGeolocation: Geolocation = {
    lat: '',
    long: ''
  }

  newUserName: Name = {
    firstname: '',
    lastname: ''
  }

  newUserAddress: Address = {
    city: '',
    street: '',
    number: 0,
    zipcode: '',
    geolocation: this.newUserGeolocation
  }

  newUser: User = {
    email: '',
    username: '',
    password: '',
    name: this.newUserName,
    address: this.newUserAddress,
    phone: ''
  }

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  addUser() {
    this.usuariosService.postUsuario(this.newUser)
      .subscribe(data => {
        console.log(data);
      });
  }

}
