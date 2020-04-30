import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './global/components/navbar/navbar.component';
import { SearchBarComponent } from './global/components/navbar/search-bar/search-bar.component';
import { ButtonComponent } from './global/components/button/button.component';
import { AdvertCardComponent } from './global/components/advert-card/advert-card.component';
import { SidebarComponent } from './global/components/navbar/sidebar/sidebar.component';

import { IndexComponent } from './global/components/index/index.component';
import { AdvertsComponent } from "./global/components/adverts/adverts.component";

import { SellGameComponent } from "./user/components/sell-game/sell-game.component";
import { NearMeComponent } from './user/components/near-me/near-me.component';
import { GameboxComponent } from "./user/components/gamebox/gamebox.component";

import { LoginComponent } from './Authentication/components/login/login.component';
import { RegisterComponent } from './Authentication/components/register/register.component';
import { AccountComponent } from './user/components/account/account.component';
import { AdminHomeComponent } from './administration/components/admin-home/admin-home.component';
import { ManagementComponent } from './administration/components/management/management.component';
import { LandingComponent } from './global/components/index/landing/landing.component';
import { RecentAdvertsComponent } from './global/components/index/recent-adverts/recent-adverts.component';
import { PopularGamesComponent } from './global/components/index/popular-games/popular-games.component';
import { GameSpotlightComponent } from './global/components/index/game-spotlight/game-spotlight.component';
import { GameCardComponent } from './global/components/game-card/game-card.component';
import { SellGamesComponent } from './global/components/index/sell-games/sell-games.component';
import { ScrollerComponent } from './global/components/index/scroller/scroller.component';
import { AddGameComponent } from './administration/components/add-game/add-game.component';

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
    GameboxComponent,
    RegisterComponent,
    SidebarComponent,
    AccountComponent,
    AdminHomeComponent,
    ManagementComponent,
    LandingComponent,
    RecentAdvertsComponent,
    PopularGamesComponent,
    GameSpotlightComponent,
    GameCardComponent,
    SellGamesComponent,
    ScrollerComponent,
    AddGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
      Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
