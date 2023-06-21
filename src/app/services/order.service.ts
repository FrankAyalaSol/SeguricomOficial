import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
    private URL = 'http://localhost:3000/api/cliente/'

    constructor(private http: HttpClient, private router: Router) { }


    GetClient(_id: string): Observable<any> {
      return this.http.get(this.URL + _id);
    }

    RequestVisitForm(user:any){
      return this.http.post<any>(this.URL + user.id, user);
    }

}
