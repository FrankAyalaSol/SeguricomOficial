import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  user = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    document_type: '',
    document_number: '',
    birth_date: '',
    password: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
