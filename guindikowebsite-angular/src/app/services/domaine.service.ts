import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from './api-url.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Domaine } from '../models/Domaine';


@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  constructor(private http:HttpClient) { }
    // Liste 
    getDomaines() : Observable<any>{
      return this.http.get<Domaine[]>(`${url}/listerDomaine`);
    }

     // geteById
  getById(id: string) 
  {
    return this.http.get<Domaine>(`${url}/voirDomaine/`+ id).pipe(
      catchError(error => throwError(error.error.message))
    );
  }
   // Ajout
   ajoutDomaine(domaine : Domaine) {
    return this.http.post<{ message: string }>(`${url}/ajouterDomaine`, domaine);
  }

   // Mettre à jour un domaine existant
   updateDomaine(id: string, changes: Partial<Domaine>): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${url}/modifierDomaine/${id}`, changes);
  }

  edit(id: string, domaine: Partial<Domaine>): Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(`${url}/modifierDomaine/${id}`, domaine);
  }

  // Archiver un domaine en utilisant PATCH
  archiveDomaine(id: string): Observable<{ message: string }> {
    const changes = { estArchive: true }; // Mettre à jour estArchive à true pour l'archivage
    return this.http.patch<{ message: string }>(`${url}/supprimerDomaine/${id}`, changes);
  }

}
