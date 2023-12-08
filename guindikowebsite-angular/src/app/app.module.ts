import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { BgColorBlueguindikoDirective } from './bg-color-blueguindiko.directive';
import { BgColorOrangeguindikoDirective } from './bg-color-orangeguindiko.directive';
import { AccueilComponent } from './accueil/accueil.component';
import { ListesMentorComponent } from './mentor/listes-mentor/listes-mentor.component';
import { ProfilMentorComponent } from './mentor/profil-mentor/profil-mentor.component';
import { ArticleHomeComponent } from './page-articles/article-home/article-home.component';
import { DetailsArticleComponent } from './page-articles/details-article/details-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BgColorBlueguindikoDirective,
    BgColorOrangeguindikoDirective,
    AccueilComponent,
    ListesMentorComponent,
    ProfilMentorComponent,
    ArticleHomeComponent,
    DetailsArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
