import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { AsignateSpecialistServiceService } from 'src/app/services/asignate-specialist.service.service';

@Component({
  selector: 'app-visualizar-especialista',
  templateUrl: './visualizar-especialista.component.html',
  styleUrls: ['./visualizar-especialista.component.css']
})
export class VisualizarEspecialistaComponent implements OnInit {

  // user = <Usuario>{};
  especialistas: any[]=[];

  constructor(private asignate_especialista: AsignateSpecialistServiceService) { }

  ngOnInit(): void {
    this.obtenerEspecialistas();
  }

  obtenerEspecialistas() {
    // this.asignate_especialista.GetClientSpecialist().subscribe(
    //   res => {console.log(res);},
    //   error => {console.log(error);}
    // )
    this.asignate_especialista.GetClientSpecialist().subscribe(
      data => {
        this.especialistas = data.usuarios;
      },
      error => {
        console.log(error);
      }
    );
  }
}
