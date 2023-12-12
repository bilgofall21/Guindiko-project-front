import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://votre-api.com';

  constructor(private http: HttpClient) {}

  getUser(userId: number): Observable<any> {
    const headers = new HttpHeaders().set('NomIci', 'valeurIci');

    return this.http.get<any>(`${this.apiUrl}/user/${userId}`, { headers });
  }

  // Vous pouvez ajouter d'autres méthodes pour les appels d'API avec des en-têtes personnalisées ici
}

