import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  user = <Usuario>{};
  public error: any;
  tipo_cliente = [
    {tipo: "Persona"},
    {tipo: "Empresa"}
  ]
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {

  }
  signUp() {

    if(!this.user.nombre){
      this.error ='Escriba un nombre';
      return;
    }
    if (!/^[a-zA-Z]+$/.test(this.user.nombre)) {
      this.error = 'El nombre solo debe contener letras';
      return;
    }
    if(!this.user.apellido){
      this.error ='Escriba un apellido';
      return;
    }
    if (!/^[a-zA-Z]+$/.test(this.user.apellido)) {
      this.error = 'El apellido solo debe contener letras';
      return;
    }
    if(!this.user.correo_electronico){
      this.error ='Escriba una correo electronico';
      return;
    }
    if (!this.user.correo_electronico.includes('@')) {
      this.error = 'El correo electrónico debe tener el formato example@gmail.com';
      return;
    }

    if (!this.user.celular) {
      this.error = 'Escriba un número de teléfono';
      return;
    }
    const celularString = this.user.celular.toString();
    if (celularString.length !== 9) {
      this.error = 'El número de teléfono debe tener 9 dígitos';
      return;
    }
    
    if (isNaN(this.user.celular)) {
      this.error = 'El número de teléfono debe ser un valor numérico';
      return;
    }
    if (!this.user.tipo_cliente) {
      this.error = 'Elija el tipo de cliente';
      return;
    }
    
    if(!this.user.password){
      this.error ='Escriba una contraseña';
      return;
    }
    
    const confirmed = window.confirm('¿Está seguro de registrar un nuevo usuario?');
  if (confirmed) {
    // Aquí puedes realizar la acción de registro del nuevo usuario
  }
    

    console.log(this.user);

    this.authService.signUpUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          //localStorage.setItem('token', res.token);
          this.router.navigate(['/Iniciar_Sesion']);
        },
        err => console.log(err)
      )
  }
  
}
