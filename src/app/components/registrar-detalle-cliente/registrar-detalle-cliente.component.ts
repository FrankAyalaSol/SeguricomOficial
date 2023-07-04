import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { AsignateSpecialistServiceService } from 'src/app/services/asignate-specialist.service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrar-detalle-cliente',
  templateUrl: './registrar-detalle-cliente.component.html',
  styleUrls: ['./registrar-detalle-cliente.component.css']
})
export class RegistrarDetalleClienteComponent implements OnInit {
  
  users: any[] = [];
  id: string | null;
  public clientes : any;
  constructor(private asignar_especialista: AsignateSpecialistServiceService,public authService: AuthService,private aRoute:ActivatedRoute, private router: Router) {
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(){
    this.asignar_especialista.getClientesA().subscribe(
      response => {
        this.clientes = response.clientesP;
      },
      error => {

      }
    );
  }

  obtenerDetalleCliente(){
    if (this.id !== null) {
      this.asignar_especialista.GetDetailClient(this.id).subscribe(
        res => {
          this.users = res.clientes
          console.log(res.clientes.nombre);
        },
        error => {console.log(error);}
      )
    }
  }

  obtenerDetalle() {
    this.router.navigate(['/registrar-detalle-form/']);
}
}
