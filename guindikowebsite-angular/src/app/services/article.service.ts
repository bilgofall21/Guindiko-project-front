import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/Article';
import { url } from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient) { }
  getAllArticles () : Observable <any> {
    return this.http.get<Article[]>(`${url}/listerArticles`)
  }
// methode pour ajouter article

  // Ajouter
  addArticles(article : Article) {
    return this.http.post<{ message: string }>(`${url}/ajouterArticle`, article);
  }


}
  // Ajout
  //  ajoutDomaine(domaine : Domaine) {
  //   return this.http.post<{ message: string }>(`${url}/ajouterDomaine`, domaine);


