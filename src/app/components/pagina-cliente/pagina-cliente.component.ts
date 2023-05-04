import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pagina-cliente',
  templateUrl: './pagina-cliente.component.html',
  styleUrls: ['./pagina-cliente.component.css']
})
export class PaginaClienteComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
