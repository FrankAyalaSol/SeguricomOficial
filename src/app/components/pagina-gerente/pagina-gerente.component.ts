import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignateSpecialistServiceService } from 'src/app/services/asignate-specialist.service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pagina-gerente',
  templateUrl: './pagina-gerente.component.html',
// styleUrls: ['./pagina-gerente.component.css']
})
export class PaginaGerenteComponent implements OnInit {
  id: string | null;
  constructor(public authService: AuthService, private asignate_specialist:AsignateSpecialistServiceService,private aRoute:ActivatedRoute, private router: Router) {
    this.id = this.aRoute.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    // this.obtenerId();
  }
  /*obtenerId() {
      if(this.id!==null){
        this.asignate_specialist.GetClient(this.id).subscribe(
          data => {
            this.router.navigate(['/Asignar_Especialista/', data._id])
            console.log(data);
          },
          error => {console.log(error)})
      }
    }*/
    obtenerId() {
      if (this.id !== null) {
        this.router.navigate(['/Asignar_Especialista/', this.id]);
      }
    }

  }
