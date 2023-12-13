import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/Article';
import { Observable, catchError, throwError } from 'rxjs';
import { url } from './api-url.service';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  addArticles(arg0: Article) {
    throw new Error('Method not implemented.');
  }
  url: any;

  getArticles() : Observable<any>{
    return this.http.get<Article[]>(`${url}/listerArticle`);
  }

   // geteById
getById(id: string)
{
  return this.http.get<Article>(`${url}/listerArticle/`+ id).pipe(
    // catchError(error => throwError(error.error.message))
  );
}
 // Ajout


 // Mettre à jour un domaine existant
 updateArticle(id: string, changes: Partial<Article>): Observable<{ message: string }> {
  return this.http.put<{ message: string }>(`${url}/modifierArticle/${id}`, changes);
}

// Modificacion
edit(id: string, Article : Article) {
  return this.http.put<{ message: string }>(`${url}/modifierArticle/` + id, Article);
}

// Suppression
delete(id: string) {
  return this.http.delete<{ message: string }>(`${url}/supprimerArticle/` + id);
}

  constructor(private http : HttpClient) { }
  getAllArticles () : Observable <any> {
    return this.http.get<Article[]>(`${url}/listerArticles`)
  }
// methode pour ajouter article

ajoutArticle(article: Article): Observable<{ message: string }> {
  return this.http.post<{ message: string }>(`${this.url}/ajouterArticle`, article);
}

}
  // Ajout
  //  ajoutDomaine(domaine : Domaine) {
  //   return this.http.post<{ message: string }>(`${url}/ajouterDomaine`, domaine);


