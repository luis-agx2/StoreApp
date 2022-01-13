import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { UsuarioResponse } from '../../interfaces/usuariosResponse.interface';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.css']
})
export class VerUsuarioComponent implements OnInit {

  usuario!: UsuarioResponse;

  constructor(
    private usuariosService: UsuariosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.usuariosService.getUsuario(id))
    ).subscribe(data => {
      this.usuario = data;
    })
  }

}
