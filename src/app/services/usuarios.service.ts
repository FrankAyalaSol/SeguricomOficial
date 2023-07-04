import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private URL = 'http://localhost:3000/api'
  
  constructor(private http: HttpClient, private router: Router) { }

  obtenerUsuarios() {
    return this.http.get(this.URL+"administrador/");
  }
}
