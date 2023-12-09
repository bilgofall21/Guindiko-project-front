import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactComponent } from './contact/contact.component';
import { NosServicesComponent } from './serviceGuindoko/nos-services/nos-services.component';
import { DetailInformatiqueComponent } from './serviceGuindoko/detail-informatique/detail-informatique.component';
import { DetailGestionManagementComponent } from './serviceGuindoko/detail-gestion-management/detail-gestion-management.component';
import { DetailTechniqueComponent } from './serviceGuindoko/detail-technique/detail-technique.component';
import { DetailHotellerieComponent } from './serviceGuindoko/detail-hotellerie/detail-hotellerie.component';
import { DetailScienceComponent } from './serviceGuindoko/detail-science/detail-science.component';
import { DetailArtComponent } from './serviceGuindoko/detail-art/detail-art.component';

import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { BgColorBlueguindikoDirective } from './bg-color-blueguindiko.directive';
import { BgColorOrangeguindikoDirective } from './bg-color-orangeguindiko.directive';
import { AccueilComponent } from './accueil/accueil.component';
import { ListesMentorComponent } from './mentor/listes-mentor/listes-mentor.component';
import { ProfilMentorComponent } from './mentor/profil-mentor/profil-mentor.component';
import { ArticleHomeComponent } from './page-articles/article-home/article-home.component';
import { DetailsArticleComponent } from './page-articles/details-article/details-article.component';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth/auth.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { PolitiqueDeConfidentialiteComponent } from './politique-de-confidentialite/politique-de-confidentialite.component';

@NgModule({
  declarations: [
    AppComponent,

    ContactComponent,
    NosServicesComponent,
    DetailInformatiqueComponent,
    DetailGestionManagementComponent,
    DetailTechniqueComponent,
    DetailHotellerieComponent,
    DetailScienceComponent,
    DetailArtComponent,
    HeaderComponent,
    FooterComponent,
    BgColorBlueguindikoDirective,
    BgColorOrangeguindikoDirective,
    AccueilComponent,
    ListesMentorComponent,
    ProfilMentorComponent,
    ArticleHomeComponent,
    DetailsArticleComponent,
    AuthComponent,
    AProposComponent,
    PolitiqueDeConfidentialiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
