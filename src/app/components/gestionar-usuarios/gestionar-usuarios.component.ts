import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-gestionar-usuarios',
  templateUrl: './gestionar-usuarios.component.html',
  styleUrls: ['./gestionar-usuarios.component.css']
})
export class GestionarUsuariosComponent implements OnInit {

  listUsuarios: Usuario[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  obtenerUsuarios() {
    this.usuariosService.obtenerUsuario().subscribe(
      (res) => {
        console.log(res);
        this.listUsuarios = [res.nombre, res.correo_electronico, res.rol];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  filterUsuario = '';
}
