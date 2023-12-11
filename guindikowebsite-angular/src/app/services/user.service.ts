import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = ' https://guindiko2.mouhamadoufaye.tech/api'; // Remplacez ceci par l'URL de votre API

  constructor(private http: HttpClient) {
    // Correction : Supprimez la virgule en trop et déplacez la déclaration de "http" à l'intérieur du constructeur
  }

  // Liste
  getAlls(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/user`);
  }

  // getById
  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/user/` + id);
  }

  // Ajouter
  add(user: User, image: File): Observable<{ message: string }> {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('image', image);

    return this.http.post<{ message: string }>(`${this.url}/user/signup`, formData);
  }

  // Edition
  edit(id: string, user: User, image: string | File): Observable<{ message: string }> {
    if (typeof image === 'string') {
      return this.http.put<{ message: string }>(`${this.url}/user/` + id, user);
    } else {
      const formData = new FormData();

      formData.append('user', JSON.stringify(user));
      formData.append('image', image);

      return this.http.put<{ message: string }>(`${this.url}/user/` + id, formData);
    }
  }

  // Suppression
  delete(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.url}/user/` + id);
  }
}
