import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './global/components/navbar/navbar.component';
import { SearchBarComponent } from './global/components/navbar/search-bar/search-bar.component';
import { ButtonComponent } from './global/components/button/button.component';
import { AdvertCardComponent } from './global/components/advert-card/advert-card.component';

import { IndexComponent } from './pages/index/index.component';
import { AdvertsComponent } from './pages/adverts/adverts.component';
import { NearMeComponent } from './pages/near-me/near-me.component';
import { SellGameComponent } from './pages/sell-game/sell-game.component';
import { GameboxComponent } from './pages/gamebox/gamebox.component';

import { LoginComponent } from './pages/login/login.component';



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
    AdvertCardComponent,
    GameboxComponent
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
