import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/Article';
import { Observable, catchError, throwError } from 'rxjs';
import { url } from './api-url.service';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }
  // Liste
  getArticles() : Observable<any>{
    return this.http.get<Article[]>(`${url}/listerArticles`);
  }

   // geteById
getById(id: string)
{
  return this.http.get<Article>(`${url}/voirArticles/`+ id).pipe(
    catchError(error => throwError(error.error.message))
  );
}
 // Ajout
 ajoutArticle(article : Article) {
  let headers = new HttpHeaders();
  headers = headers.set('token', "82|sOVoa2hc1buh8O13vgYtxrFCXrSuKcmEd8AfKc4Lfb226ec6");
  return this.http.post<Article>(`${url}/ajouterArticle`,{'headers': headers});
  // return this.http.post<{ message: string }>(`${url}/ajouterArticle`, article);
}

 // Mettre à jour un Article existant
 updateArticle(id: string, changes: Partial<Article>): Observable<{ message: string }> {
  return this.http.put<{ message: string }>(`${url}/modifierArticles/${id}`, changes);
}

edit(id: string, article: Partial<Article>): Observable<{ message: string }> {
  return this.http.patch<{ message: string }>(`${url}/modifierArticles/${id}`, article);
}

// Archiver un Article en utilisant PATCH
archiveArticle(id: string): Observable<{ message: string }> {
  const changes = { estArchive: true }; // Mettre à jour estArchive à true pour l'archivage
  return this.http.patch<{ message: string }>(`${url}/supprimerArticles/${id}`, changes);
}

}