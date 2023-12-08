import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { PolitiqueDeConfidentialiteComponent } from './politique-de-confidentialite/politique-de-confidentialite.component';

const routes: Routes = [
  // {path: 'auth', component:AuthComponent},
  // {path: 'a-propos', component:AProposComponent},
  // {path: 'politique-de-confidentialite', component:PolitiqueDeConfidentialiteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
