import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-generar-orden-visita',
  templateUrl: './generar-orden-visita.component.html',
  styleUrls: ['./generar-orden-visita.component.css']
})
export class GenerarOrdenVisitaComponent implements OnInit {
  [x: string]: any;
  visitaForm: FormGroup;

  visita={
    tipos: '',
    dato1: '',
    dato2: '',
    dato3: '',
    dato4: '',
    pregunta1: '',
    pregunta2: '',
    pregunta3: '',
    pregunta4: '',
    pregunta5: '',
    pregunta6: ''

  }
  tipo_cliente = [
    {tipo: "Casa"},
    {tipo: "Empresa"}
  ]

  constructor(private fb: FormBuilder,  private authService: AuthService) {
    this.visitaForm = this.fb.group({
      tipos: ['', Validators.required],
      dato1: ['', Validators.required],
      dato2: ['', Validators.required],
      dato3: ['', Validators.required],
      dato4: ['', Validators.required],
      pregunta1: ['', Validators.required],
      pregunta2: ['', Validators.required],
      pregunta3: ['', Validators.required],
      pregunta4: ['', Validators.required],
      pregunta5: ['', Validators.required],
      pregunta6: ['', Validators.required],
    })

  
   }

  ngOnInit(): void {
  }

  agregarVisita(){

    console.log(this.visita);

  }

}
