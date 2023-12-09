import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionUserComponent } from './dashboardAdmin/gestionUser/gestion-user/gestion-user.component';
import { DashboardComponent } from './dashboardAdmin/dashboard/dashboard/dashboard.component';
import { GestionContenuComponent } from './dashboardAdmin/gestionContenu/gestion-contenu/gestion-contenu.component';
import { GestionProfilComponent } from './dashboardAdmin/gestionProfil/gestion-profil/gestion-profil.component';
import { GestionDemandeComponent } from './dashboardMentor/gestion-demande/gestion-demande.component';
import { GestionContenuMentorComponent } from './dashboardMentor/gestion-contenu-mentor/gestion-contenu-mentor.component';
import { DashboardmentorComponent } from './dashboardMentor/dashboardmentor/dashboardmentor.component';
import { GestionProfilMentorComponent } from './dashboardMentor/gestion-profil-mentor/gestion-profil-mentor.component';
import { DashboardmentoreComponent } from './dashboardMentore/dashboardmentore/dashboardmentore.component';
import { GestionDemandeMentoreComponent } from './dashboardMentore/gestion-demande-mentore/gestion-demande-mentore.component';
import { GestionProfilMentoreComponent } from './dashboardMentore/gestion-profil-mentore/gestion-profil-mentore.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent},
  {path: '', redirectTo:'dashboard', pathMatch:'full'},
  {path:'gestion-user', component: GestionUserComponent},
  {path:'gestion-profil', component: GestionProfilComponent},
  {path:'gestion-contenu', component: GestionContenuComponent},
  {path:'gestion-demande', component: GestionDemandeComponent},
  {path:'gestion-profil-mentor', component:GestionProfilMentorComponent},
  {path:'dashboardmentor', component:DashboardmentorComponent},
  {path:'gestion-contenu-mentor', component:GestionContenuMentorComponent},
  {path:'dashboardmentore', component:DashboardmentoreComponent},
  {path:'gestion-demande-mentore', component:GestionDemandeMentoreComponent},
  {path:'gestion-profil-mentore', component:GestionProfilMentoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
