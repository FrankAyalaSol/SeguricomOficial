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
  tipo_cliente = [
    {tipo: "Persona"},
    {tipo: "Empresa"}
  ]
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {

  }
  signUp() {
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
