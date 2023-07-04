import { Component, NgModule } from '@angular/core';
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
import { PaginaEspecialistaComponent } from './components/pagina-especialista/pagina-especialista.component';
import { PaginaGerenteComponent } from './components/pagina-gerente/pagina-gerente.component';
import { PaginaAdministradorComponent } from './components/pagina-administrador/pagina-administrador.component';
import { VisualizarEspecialistaComponent } from './components/visualizar-especialista/visualizar-especialista.component';
import { AsignarEspecialistaComponent } from './components/asignar-especialista/asignar-especialista.component';
import { AsignarEspecialistaClienteComponent } from './components/asignar-especialista-cliente/asignar-especialista-cliente.component';
import { RegistrarDetalleClienteComponent } from './components/registrar-detalle-cliente/registrar-detalle-cliente.component';

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
    path: 'Pagina_Cliente/:id', //private
     component:PaginaClienteComponent,
     canActivate: [AuthGuard]
  },
  {
    path: 'Pagina_Especialista', //private
    component:PaginaEspecialistaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Pagina_Gerente/:id', //private
    component:PaginaGerenteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Asignar_Especialista/:id',
    component:AsignarEspecialistaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Asignar_Especialista_Cliente',
    component:AsignarEspecialistaClienteComponent,
  },
  {
    path: 'Visualizar_Especialista',
    component:VisualizarEspecialistaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Pagina_Administrador', //private
    component:PaginaAdministradorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Solicitar_Cita/:id', //private
     component:SolicitarCitaComponent

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
    path: 'registrar-detalle-cliente/:id',
    component:RegistrarDetalleClienteComponent,
    canActivate: [AuthGuard]
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
