import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './global/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import { AdvertsComponent } from './pages/adverts/adverts.component';
import { LoginComponent } from './pages/login/login.component';
import { SellGameComponent } from './pages/sell-game/sell-game.component';
import { SearchBarComponent } from './global/navbar/search-bar/search-bar.component';
import { ButtonComponent } from './global/button/button.component';
import { NearMeComponent } from './pages/near-me/near-me.component';
import { AdvertCardComponent } from './global/advert-card/advert-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    AdvertsComponent,
    LoginComponent,
    SellGameComponent,
    SearchBarComponent,
    ButtonComponent,
    NearMeComponent,
    AdvertCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
