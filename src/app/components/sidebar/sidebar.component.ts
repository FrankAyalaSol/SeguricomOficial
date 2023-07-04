import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrderServiceService } from 'src/app/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public rol:any;
  public isDetalleEstudio: boolean = false;
  id: string | null;

  constructor(
    private _orderService : OrderServiceService, public authService: AuthService,
    private aRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.rol = this._orderService.getIdentity();
    console.log(this.rol);

    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  obtenerId() {
    if (this.id !== null) {
      this.router.navigate(['/Solicitar_Cita/', this.id]);
    }
  }
  obtenerIdEspecialista() {

      this.router.navigate(['/Asignar_Especialista/']);
    
  }
  obtenerIdEspecialista2() {
    
      this.router.navigate(['/registrar-detalle-cliente/']);
    
  }
}
