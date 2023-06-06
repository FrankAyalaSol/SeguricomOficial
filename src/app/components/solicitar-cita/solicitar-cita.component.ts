import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,Validators} from '@angular/forms'

@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrls: ['./solicitar-cita.component.css']
})
export class SolicitarCitaComponent implements OnInit {

  public formParent: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.initFormParent()
  }

  initFormParent():void{
    this.formParent = new FormGroup({

    })
  }

}
