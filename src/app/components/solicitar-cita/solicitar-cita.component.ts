import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators  } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrls: ['./solicitar-cita.component.css'],
})

export class SolicitarCitaComponent implements OnInit {
  isFieldsBlocked: boolean = false;
  // [x: string]: any;
  visitaForm!: FormGroup;

  visita={
    tipos: '',
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
  public formParent: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //this.initFormParent()
    this.visitaForm = this.fb.group({
      tipos: ['', Validators.required],
      pregunta1: ['', Validators.required],
      pregunta2: ['', Validators.required],
      pregunta3: ['', Validators.required],
      pregunta4: ['', Validators.required],
      pregunta5: ['', Validators.required],
      pregunta6: ['', Validators.required],
    })
  }

  agregarVisita(){

    console.log(this.visita);

  }

  // initFormParent():void{
  //   this.formParent = new FormGroup({

  //   })
  // }

}
