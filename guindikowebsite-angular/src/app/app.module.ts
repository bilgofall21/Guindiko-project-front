import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionUserComponent } from './dashboardAdmin/gestionUser/gestion-user/gestion-user.component';
import { GestionContenuComponent } from './dashboardAdmin/gestionContenu/gestion-contenu/gestion-contenu.component';
import { GestionProfilComponent } from './dashboardAdmin/gestionProfil/gestion-profil/gestion-profil.component';
import { DashboardComponent } from './dashboardAdmin/dashboard/dashboard/dashboard.component';
import { GestionDemandeComponent } from './dashboardMentor/gestion-demande/gestion-demande.component';
import { DashboardmentorComponent } from './dashboardMentor/dashboardmentor/dashboardmentor.component';
import { GestionProfilMentorComponent } from './dashboardMentor/gestion-profil-mentor/gestion-profil-mentor.component';
import { GestionContenuMentorComponent } from './dashboardMentor/gestion-contenu-mentor/gestion-contenu-mentor.component';
import { DashboardmentoreComponent } from './dashboardMentore/dashboardmentore/dashboardmentore.component';
import { GestionProfilMentoreComponent } from './dashboardMentore/gestion-profil-mentore/gestion-profil-mentore.component';
import { GestionDemandeMentoreComponent } from './dashboardMentore/gestion-demande-mentore/gestion-demande-mentore.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionUserComponent,
    GestionContenuComponent,
    GestionProfilComponent,
    DashboardComponent,
    GestionDemandeComponent,
    DashboardmentorComponent,
    GestionProfilMentorComponent,
    GestionContenuMentorComponent,
    DashboardmentoreComponent,
    GestionProfilMentoreComponent,
    GestionDemandeMentoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
