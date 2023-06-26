import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrderServiceService } from 'src/app/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-cliente',
  templateUrl: './pagina-cliente.component.html',
  styleUrls: ['./pagina-cliente.component.css'],
})
export class PaginaClienteComponent implements OnInit {
  public isDetalleEstudio: boolean = false;
  id: string | null;

  constructor(
    public authService: AuthService,
    private aRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {}
  obtenerId() {
    if (this.id !== null) {
      this.router.navigate(['/Solicitar_Cita/', this.id]);
    }
  }
}
