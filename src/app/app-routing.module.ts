import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';

//Componentes
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { E404Component } from './components/e404/e404.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PaginaClienteComponent } from './components/pagina-cliente/pagina-cliente.component';
import { SolicitarCitaComponent } from './components/solicitar-cita/solicitar-cita.component';

const routes: Routes = [
  {
    path: '',
    component:PaginaPrincipalComponent
  },
  {
    path: 'Iniciar_Sesion', //sign-in
     component:IniciarSesionComponent
  },
  {
    path: 'Crear_Usuario',//sign-up
    component:CrearUsuarioComponent
  },
  {
    path: 'Pagina_Cliente', //private
     component:PaginaClienteComponent,
     canActivate: [AuthGuard]
  },
  {
    path: 'Solicitar_Cita', //private
     component:SolicitarCitaComponent,
     canActivate: [AuthGuard]
  },
  {
    path: 'ERROR404',
    component:E404Component
  },
  {
    path: 'Contacto',
    component:ContactoComponent
  },
  {
    path: 'Precios',
    component:PreciosComponent
  },
  {
    path: 'Servicios',
    component:ServiciosComponent
  },
  {
    path: 'Sobre_Nosotros',
    component:SobreNosotrosComponent
  },
  {
    path: 'principal',
    component:PrincipalComponent
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
