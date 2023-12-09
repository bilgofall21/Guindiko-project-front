import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListesMentorComponent } from './mentor/listes-mentor/listes-mentor.component';
import { ArticleHomeComponent } from './page-articles/article-home/article-home.component';
import { DetailsArticleComponent } from './page-articles/details-article/details-article.component';

const routes: Routes = [
  {path : '', component : AccueilComponent,},
  {path : 'listes-mentor', component :ListesMentorComponent,},
  {path : 'article-home' , component : ArticleHomeComponent,},
  {path : 'details-article', component : DetailsArticleComponent,},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
