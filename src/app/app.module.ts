import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

//Componentes del Proyecto Seguricom
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { E404Component } from './components/e404/e404.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PreciosComponent } from './components/precios/precios.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PaginaClienteComponent } from './components/pagina-cliente/pagina-cliente.component';
import { SolicitarCitaComponent } from './components/solicitar-cita/solicitar-cita.component';
import { PaginaEspecialistaComponent } from './components/pagina-especialista/pagina-especialista.component';
import { PaginaGerenteComponent } from './components/pagina-gerente/pagina-gerente.component';
import { PaginaAdministradorComponent } from './components/pagina-administrador/pagina-administrador.component';
import { VisualizarEspecialistaComponent } from './components/visualizar-especialista/visualizar-especialista.component';
import { AsignarEspecialistaComponent } from './components/asignar-especialista/asignar-especialista.component';
import { AsignarEspecialistaClienteComponent } from './components/asignar-especialista-cliente/asignar-especialista-cliente.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EspecialistaComponent } from './components/especialista/especialista.component';
import { RegistrarDetalleClienteComponent } from './components/registrar-detalle-cliente/registrar-detalle-cliente.component';
import { GestionarUsuariosComponent } from './components/gestionar-usuarios/gestionar-usuarios.component';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { VisualizarUsuarioComponent } from './components/visualizar-usuario/visualizar-usuario.component';
import { RegistrarDetalleFormComponent } from './components/registrar-detalle-form/registrar-detalle-form.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    CrearUsuarioComponent,
    E404Component,
    PrincipalComponent,
    ServiciosComponent,
    PreciosComponent,
    SobreNosotrosComponent,
    ContactoComponent,
    PaginaPrincipalComponent,
    PaginaClienteComponent,
    SolicitarCitaComponent,
    PaginaEspecialistaComponent,
    PaginaGerenteComponent,
    PaginaAdministradorComponent,
    VisualizarEspecialistaComponent,
    AsignarEspecialistaComponent,
    AsignarEspecialistaClienteComponent,
    SidebarComponent,
    ClientesComponent,
    EspecialistaComponent,
    RegistrarDetalleClienteComponent,
    GestionarUsuariosComponent,
    ActualizarUsuarioComponent,
    VisualizarUsuarioComponent,
    FilterPipe,
    RegistrarDetalleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
