import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { BgColorBlueguindikoDirective } from './bg-color-blueguindiko.directive';
import { BgColorOrangeguindikoDirective } from './bg-color-orangeguindiko.directive';
import { AuthComponent } from './auth/auth.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { PolitiqueDeConfidentialiteComponent } from './politique-de-confidentialite/politique-de-confidentialite.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BgColorBlueguindikoDirective,
    BgColorOrangeguindikoDirective,
    AuthComponent,
    AProposComponent,
    PolitiqueDeConfidentialiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
