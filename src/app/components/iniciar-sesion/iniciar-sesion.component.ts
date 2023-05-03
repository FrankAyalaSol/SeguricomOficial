import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  user = {
    email: '',
    password: '',
  }
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
          //this.router.navigate(['/pagina-cliente']);
        },
        err => console.log(err)
      )
  }
}
