import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// FontAwesome Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// locale
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'
registerLocaleData(localeFr, 'fr');

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './global/components/navbar/navbar.component';
import { SearchBarComponent } from './global/components/navbar/search-bar/search-bar.component';
import { ButtonComponent } from './global/components/button/button.component';
import { AdvertCardComponent } from './global/components/advert-card/advert-card.component';
import { SidebarComponent } from './global/components/navbar/sidebar/sidebar.component';

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

import { AdvertSingleComponent } from './global/components/advert-single/advert-single.component';
import { GameSingleComponent } from './global/components/game-single/game-single.component';
import { GamesComponent } from './global/components/games/games.component';
import { NotFoundComponent } from './global/components/not-found/not-found.component';
import { ToggleButtonComponent } from './global/components/toggle-button/toggle-button.component';
import { FooterComponent } from './global/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './global/modules/material/material/material.module';
import { MatSelectSearchComponent } from './global/components/index/sell-games/mat-select-search/mat-select-search.component';

import { MouseWheelDirective } from './global/directives/mousewheel.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
    MouseWheelDirective,
    AdvertSingleComponent,
    GameSingleComponent,
    GamesComponent,
    ToggleButtonComponent,
    FooterComponent,
    MatSelectSearchComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
      Title,
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
