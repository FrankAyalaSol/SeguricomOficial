import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-gestionar-usuarios',
  templateUrl: './gestionar-usuarios.component.html',
  styleUrls: ['./gestionar-usuarios.component.css']
})
export class GestionarUsuariosComponent implements OnInit {

  listUsuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  obtenerUsuarios() {
    this.usuariosService.obtenerUsuarios().subscribe(
      (res) => {
        console.log(res);
        this.listUsuarios = Object.values(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  filterUsuario = '';
}
