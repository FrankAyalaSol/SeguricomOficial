import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators  } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
// import {  } from 'src/app/models/OrderVisita.model';
import { OrderVisita } from 'src/app/models/OrderVisita.model';
import { Usuario } from 'src/app/models/usuario.model';
import { OrderServiceService} from 'src/app/services/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrls: ['./solicitar-cita.component.css'],
})

export class SolicitarCitaComponent implements OnInit {
  id: string | null;
  isFieldsBlocked: boolean = false;
  // [x: string]: any;
  visitaForm!: FormGroup;

  visita = <OrderVisita>{};

  // tipo_cliente = [
  //   {tipo: "Casa"},
  //   {tipo: "Empresa"}
  // ]
  public formParent: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private router: Router, private order_service:OrderServiceService, private aRoute:ActivatedRoute) {
    this.visitaForm = this.fb.group({
      // tipos: ['', Validators.required],
      // nombre: ['', Validators.required],
      // apellido: ['', Validators.required],
      // celular: ['', Validators.required],
      // direccion: ['', Validators.required],
      pregunta1: ['', Validators.required],
      pregunta2: ['', Validators.required],
      pregunta3: ['', Validators.required],
      pregunta4: ['', Validators.required],
      pregunta5: ['', Validators.required],
      pregunta6: ['', Validators.required],
      pregunta7: ['', Validators.required],
      pregunta8: ['', Validators.required],
      pregunta9: ['', Validators.required]
    })
    if(this.visita !== undefined){
      this.visitaForm.patchValue(this.visita)
    }

    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    //this.initFormParent()

    this.obtenerCliente();

  }

  obtenerCliente() {
    //console.log(this.id)
    if (this.id !== null) {
      this.order_service.GetClient(this.id).subscribe(
        data => {
          console.log(data);
          this.visitaForm.setValue({
            pregunta1: data.pregunta1,
            pregunta2: data.pregunta2,
            pregunta3: data.pregunta3,
            pregunta4: data.pregunta4,
            pregunta5: data.pregunta5,
            pregunta6: data.pregunta6,
            pregunta7: data.pregunta7,
            pregunta8: data.pregunta8,
            pregunta9: data.pregunta9,
          })
        },
        error => {console.log(error)}
      )
    }
  }

  agregarVisita(){
    console.log(this.visita);
    this.order_service.RequestVisitForm(this.visitaForm).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/Pagina_Cliente']);
      },
      err => console.log(err)
    )

  }

  volver() {
    if (this.id !== null) {
      this.order_service.GetClient(this.id).subscribe(
        data => {
          this.router.navigate(['/Pagina_Cliente', data._id])
        },
        error => { console.log(error) }
      )
    }
  }

}
