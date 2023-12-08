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
    DetailArtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
