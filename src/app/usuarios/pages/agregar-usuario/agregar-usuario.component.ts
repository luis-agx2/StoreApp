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

  mostrar: boolean = false;
  mensaje: string = '';
  estilos: string = '';

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

    if (
      !this.newUserName.lastname || !this.newUserName.firstname ||
      !this.newUserAddress.city ||
      !this.newUserAddress.street ||
      !this.newUserAddress.zipcode ||
      !this.newUser.email ||
      !this.newUser.username ||
      !this.newUser.password ||
      !this.newUser.phone
    ) {
      this.estilos = 'alert alert-danger';
      this.mensaje = 'Asegurate de llenar todos los campos';
      this.mostrar = true;
      return;
    }


    this.usuariosService.postUsuario(this.newUser)
      .subscribe(data => {
        this.estilos = 'alert alert-primary';
        this.mensaje = 'Usuario Registrado';
        this.mostrar = true;
        console.log(data);
      });

    setTimeout(() => {
      this.mostrar = false
    }, 2000);

    this.newUserName = {
      firstname: '',
      lastname: ''
    }

    this.newUserAddress = {
      city: '',
      street: '',
      number: 0,
      zipcode: '',
      geolocation: this.newUserGeolocation
    }

    this.newUser = {
      email: '',
      username: '',
      password: '',
      name: this.newUserName,
      address: this.newUserAddress,
      phone: ''
    }
  }

}
