import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pagina-especialista',
  templateUrl: './pagina-especialista.component.html',
  styleUrls: ['./pagina-especialista.component.css']
})
export class PaginaEspecialistaComponent implements OnInit {

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

}
