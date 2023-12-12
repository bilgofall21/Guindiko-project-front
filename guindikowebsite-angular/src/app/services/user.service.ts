import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { url } from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: any;

  constructor(private http : HttpClient
    ) { }

  // Liste
  getUsers() : Observable<any>{
    return this.http.get<User[]>(`${url}/listeUser`);
  }
  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.url}/register`, userData);
  }


}
