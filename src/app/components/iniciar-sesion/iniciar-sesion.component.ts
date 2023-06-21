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
          localStorage.setItem('token', res.token);
          localStorage.setItem('rol', res.rol);
          if(res.rol == "1") {
            this.router.navigate(['/Pagina_Administrador']);
          } else if (res.rol == "2"){
            this.router.navigate(['/Pagina_Gerente']);
          } else if (res.rol == "3"){
            this.router.navigate(['/Pagina_Especialista']);
          } else if (res.rol == "4"){
            this.router.navigate(['/Pagina_Cliente', res._id]);
            // this.router.navigate(['/Solicitar_Cita/', res._id]);
          }
        });

  }
}
