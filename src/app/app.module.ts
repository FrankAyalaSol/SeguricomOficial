import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

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
    PaginaClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
