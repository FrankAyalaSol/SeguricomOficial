import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { AsignateSpecialistServiceService } from 'src/app/services/asignate-specialist.service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-asignar-especialista',
  templateUrl: './asignar-especialista.component.html',
  styleUrls: ['./asignar-especialista.component.css']
})
export class AsignarEspecialistaComponent implements OnInit {
  public citasP : any;
  public detalle_id: any;
  id: string | null;
  user = <Usuario>{};

  constructor(public authService: AuthService, private asignate_specialist:AsignateSpecialistServiceService,private aRoute:ActivatedRoute, private router: Router) {
    this.id = this.aRoute.snapshot.paramMap.get('id')
   }
  ngOnInit() {
    this.asignate_specialist.getClientesP().subscribe(
      response => {
        this.citasP = response.clientesP;
      },
      error => {

      }
    );
  }

  get_id(id:any){
    this.detalle_id = id;
  }

  asignarEspecialista(id:any){


      this.asignate_specialist.putClientes({_id: id}).subscribe(          
        response => {
        this.asignate_specialist.getClientesP().subscribe(
          response => {
            this.citasP = response.clientesP;
          },
          error => {
            
          }
        );
      },
      error => {

      });

          //this.success_message = 'Se aumentó el stock correctamente';

  
  }
  // obtenerClientesPendientes(){
  //   if(this.id!==null){
  //     console.log(this.id);
  //     if(this.user.rol==4){
  //       this.asignate_specialist.GetClient(this.user._id).subscribe(
  //         res =>{
  //     }

  //         res.id
  //         this.asignate_specialist.getClientesPendiente(this.id).subscribe(data=>{
  //       }
  //     )
  //   }


  //   },error =>{
  //     console.log(error);
  //   })
  // }

  // agregarVisita(){
  //   if(this.id!==null){
  //     console.log(this.visita);
  //     this.order_service.GetClient(this.id).subscribe(
  //       res =>{
  //         const idCliente = res._id;
  //         this.order_service.RegistrarDetalleEstudio(idCliente,this.visita).subscribe(
  //           res => {
  //             console.log(res);
  //             this.router.navigate(['/Pagina_Cliente',res._id]);
  //           },
  //           err => {console.log(err)}
  //         )
  //       }
  //     );

  //   }

  // }

  /*volver() {
    if (this.id !== null) {
      this.asignate_specialist.GetClient(this.id).subscribe(
        data => {
          this.router.navigate(['/Pagina_Gerente', data._id])
        },
        error => { console.log(error) }
      )
    }
  }*/
  volver() {
    if (this.id !== null) {
      this.router.navigate(['/Pagina_Gerente', this.id]);
    }
  }

}
