import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionUserComponent } from './dashboardAdmin/gestionUser/gestion-user/gestion-user.component';
import { DashboardComponent } from './dashboardAdmin/dashboard/dashboard/dashboard.component';
import { GestionContenuComponent } from './dashboardAdmin/gestionContenu/gestion-contenu/gestion-contenu.component';
import { GestionProfilComponent } from './dashboardAdmin/gestionProfil/gestion-profil/gestion-profil.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent},
  {path: '', redirectTo:'dashboard', pathMatch:'full'},
  {path:'gestion-user', component: GestionUserComponent},
  {path:'gestion-profil', component: GestionProfilComponent},
  {path:'gestion-contenu', component: GestionContenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
