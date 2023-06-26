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
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }
  signIn() {
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
        error => {console.log(error);}
      );

  }
}
