import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrls: ['./solicitar-cita.component.css']
})
export class SolicitarCitaComponent implements OnInit {
  citaForm: FormGroup;
  
  cita={
    nombre: '',
    numero: '',
    email: '',
    tipo: ''
  }

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.citaForm = this.fb.group({
      nombre:['', Validators.required],
      numero:['', Validators.required],
      email:['', Validators.required],
      tipo:['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  // agregarCita(){
  //   console.log(this.citaForm)
  //   }
  // }
  
  crearCita() {
    console.log(this.cita);

    this.authService.createCita(this.cita)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
//        this.router.navigate(['/private']);
        },
        err => console.log(err)
      )
  }
}