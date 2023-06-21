import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/usuario.model';
import { OrderServiceService } from 'src/app/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-cliente',
  templateUrl: './pagina-cliente.component.html',
  styleUrls: ['./pagina-cliente.component.css']
})
export class PaginaClienteComponent implements OnInit {
  // usuarioData = <Usuario>{};

  id: string | null;

  constructor(public authService: AuthService, private order_service:OrderServiceService,private aRoute:ActivatedRoute, private router: Router) {
    this.id = this.aRoute.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    // this.obtenerId();
  }
  obtenerId() {
      if(this.id!==null){
        this.order_service.GetClient(this.id).subscribe(
          data => {
            this.router.navigate(['/Solicitar_Cita/', data._id])
            console.log(data);
          },
          error => {console.log(error)})
      }
    }
  }
