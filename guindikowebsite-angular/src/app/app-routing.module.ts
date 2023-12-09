import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListesMentorComponent } from './mentor/listes-mentor/listes-mentor.component';
import { ArticleHomeComponent } from './page-articles/article-home/article-home.component';
import { DetailsArticleComponent } from './page-articles/details-article/details-article.component';
import { NosServicesComponent } from './serviceGuindoko/nos-services/nos-services.component';
import { DetailInformatiqueComponent } from './serviceGuindoko/detail-informatique/detail-informatique.component';
import { DetailHotellerieComponent } from './serviceGuindoko/detail-hotellerie/detail-hotellerie.component';
import { DetailTechniqueComponent } from './serviceGuindoko/detail-technique/detail-technique.component';
import { DetailArtComponent } from './serviceGuindoko/detail-art/detail-art.component';
import { DetailGestionManagementComponent } from './serviceGuindoko/detail-gestion-management/detail-gestion-management.component';
import { DetailScienceComponent } from './serviceGuindoko/detail-science/detail-science.component';
const routes: Routes = [
  {path : '', component : AccueilComponent,},
  {path : 'listes-mentor', component :ListesMentorComponent,},
  {path : 'article-home' , component : ArticleHomeComponent,},
  {path : 'details-article', component : DetailsArticleComponent,},
  { path: 'retourService', component: NosServicesComponent},
  {path:'detailInformatique', component:DetailInformatiqueComponent},
  {path:'detailHotellerie', component:DetailHotellerieComponent},
  {path:'detailTechnique', component:DetailTechniqueComponent},
  {path:'detailArt', component:DetailArtComponent},
  {path:'detailGestman', component:DetailGestionManagementComponent},
  {path:'detailScience', component:DetailScienceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
