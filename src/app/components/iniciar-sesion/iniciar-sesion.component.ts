import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  user = <Usuario>{};
  public error: any;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  close_alert(){
    this.error='';
  }
  signIn() {

    if(!this.user.correo_electronico){
      this.error ='Escriba una correo electronico';
      return;
    }
    if (!this.user.correo_electronico.includes('@')) {
      this.error = 'El correo electrónico debe tener el formato example@gmail.com';
      return;
    }
    if(!this.user.password){
      this.error ='Escriba una contraseña';
      return;
    }

    if (this.error === 'La contraseña no coincide') {
      this.error = 'Contraseña incorrecta.';
    } else {
      this.error = 'Error en el inicio de sesión. Por favor, inténtelo nuevamente.';
    }
    
    console.log(this.user);
    this.authService.signInUser(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.jwt);
          localStorage.setItem('rol', res.cliente.rol);
          if(res.cliente.rol == 1) {
            this.router.navigate(['/Pagina_Administrador']);
          } else if (res.cliente.rol == 2){
            this.router.navigate(['/Pagina_Gerente', res.cliente._id]);
          } else if (res.cliente.rol == 3){
            this.router.navigate(['/Pagina_Especialista']);
          } else if (res.cliente.rol == 4){
            this.router.navigate(['/Pagina_Cliente', res.cliente._id]);
            // this.router.navigate(['/Solicitar_Cita/', res._id]);
          }
        },
        error => {console.log(error);
          
        }
      );

  }
}
