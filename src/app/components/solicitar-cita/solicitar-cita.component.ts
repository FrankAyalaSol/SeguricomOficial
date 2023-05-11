import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrls: ['./solicitar-cita.component.css']
})
export class SolicitarCitaComponent implements OnInit {
  citaForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.citaForm = this.fb.group({
      nombre:['', Validators.required],
      numero:['', Validators.required],
      email:['', Validators.required],
      tipo:['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  agregarCita(){
    console.log(this.citaForm)
    }
  }


