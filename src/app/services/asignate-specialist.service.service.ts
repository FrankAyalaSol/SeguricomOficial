import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignateSpecialistServiceService {
  private URLID = 'http://localhost:3000/api/cliente/'

  constructor(private http: HttpClient, private router: Router) { }


  GetClient(_id: string): Observable<any> {
    return this.http.get(this.URLID + _id);
  }
}
