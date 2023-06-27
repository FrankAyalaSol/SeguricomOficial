import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pagina-administrador',
  templateUrl: './pagina-administrador.component.html',
  styleUrls: ['./pagina-administrador.component.css']
})
export class PaginaAdministradorComponent implements OnInit {

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

}
