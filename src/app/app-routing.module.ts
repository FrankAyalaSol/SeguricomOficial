import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { E404Component } from './components/e404/e404.component';

const routes: Routes = [
  {
    path: '',
     component:PrincipalComponent
  },
  {
    path: 'Iniciar_Sesion',
     component:IniciarSesionComponent
  },
  {
    path: 'Crear_Usuario',
    component:CrearUsuarioComponent
  },
  {
    path: 'ERROR404',
    component:E404Component
  },
  {
    path: '**',
    redirectTo: 'ERROR404',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
