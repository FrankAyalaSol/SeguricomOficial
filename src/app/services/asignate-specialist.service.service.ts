import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignateSpecialistServiceService {
  private URLID = 'http://localhost:3000/api/cliente/'
  private ID = 'http://localhost:3000/api/gerente/'
  private IDESPECIALISTA = 'http://localhost:3000/api/especialista/'

  constructor(private http: HttpClient, private router: Router) { }


  GetClient(_id: string): Observable<any> {
    return this.http.get(this.URLID + _id);
  }
  getClientesPendiente(_idCliente:string,_idEspecialista:string):Observable<any>{
    return this.http.get(this.ID+"clientes/"+_idCliente+"/detalleestudio/"+_idEspecialista);
  }
  getClientesP():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.ID+"citasPendiente", { headers: headers });
  }
  getClientes(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.ID+"citas", { headers: headers });
  }
  GetClientSpecialist(): Observable<any> {
    return this.http.get(this.ID + "especialistas" );
  }
  putClientes(data:any):Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.ID + 'citasPendiente/estado/' + data._id, {
      headers: headers,
    });
  }
  GetDetailClient(id: any): Observable<any> {
    return this.http.get(this.IDESPECIALISTA + "detalleCliente/" + id );
  }
}
