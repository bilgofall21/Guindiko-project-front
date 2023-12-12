import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from './api-url.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Sousdomaine } from '../models/Sousdomaine';

@Injectable({
  providedIn: 'root'
})
export class SousDomaineService {

  constructor(private http:HttpClient) { }
  // Liste 
  // getSousDomaines() : Observable<any>{
  //   return this.http.get<Sousdomaine[]>(`${url}/domaine/listerSousDomaine/`);
  // }
  // Récupérer les sous-domaines pour un domaine spécifique
  getSousDomaines(domaineId: string): Observable<Sousdomaine[]> {
    return this.http.get<Sousdomaine[]>(`${url}/domaine/listerSousDomaine/${domaineId}`);
  }

   // geteById
getById(id: string) 
{
  return this.http.get<Sousdomaine>(`${url}/afficherSousDomaine/`+ id).pipe(
    catchError(error => throwError(error.error.message))
  );
}
 // Ajout
 ajoutSousDomaine(sousdomaine : Sousdomaine, domaineId: string) {
  return this.http.post<{ message: string }>(`${url}/ajouterSousDomaine/${domaineId}`, sousdomaine);
}

 // Mettre à jour un sous domaine existant
 updateSousDomaine(id: string, changes: Partial<Sousdomaine>): Observable<{ message: string }> {
  return this.http.put<{ message: string }>(`${url}/modifierSousDomaine/${id}`, changes);
}

edit(id: string, sousdomaine: Partial<Sousdomaine>): Observable<{ message: string }> {
  return this.http.patch<{ message: string }>(`${url}/modifierSousDomaine/${id}`, sousdomaine);
}

// Archiver un domaine en utilisant PATCH
archiveSousDomaine(id: string): Observable<{ message: string }> {
  const changes = { estArchive: true }; // Mettre à jour estArchive à true pour l'archivage
  return this.http.patch<{ message: string }>(`${url}/supprimerSousDomaine/${id}`, changes);
}
}
