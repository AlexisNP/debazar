import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from "./global/components/index/landing/landing.component";
import { RecentAdvertsComponent } from "./global/components/index/recent-adverts/recent-adverts.component";
import { SellGamesComponent } from "./global/components/index/sell-games/sell-games.component";
import { PopularGamesComponent } from "./global/components/index/popular-games/popular-games.component";
import { GameSpotlightComponent } from "./global/components/index/game-spotlight/game-spotlight.component";

import { AdvertsComponent } from "./global/components/adverts/adverts.component";
import { AdvertSingleComponent } from './global/components/advert-single/advert-single.component';
import { GameSingleComponent } from './global/components/game-single/game-single.component';

import { LoginComponent } from "./Authentication/components/login/login.component";
import { RegisterComponent } from "./Authentication/components/register/register.component";

import { AuthGuard } from './Authentication/auth/auth.guard';

import { AccountComponent } from './user/components/account/account.component';
import { SellGameComponent } from "./user/components/sell-game/sell-game.component";
import { NearMeComponent } from './user/components/near-me/near-me.component';
import { GameboxComponent } from "./user/components/gamebox/gamebox.component";

import { AdminHomeComponent } from './administration/components/admin-home/admin-home.component';
import { ManagementComponent } from './administration/components/management/management.component';
import { GamesComponent } from './global/components/games/games.component';
import { AddGameComponent } from './administration/components/add-game/add-game.component';

import { NotFoundComponent } from "./global/components/not-found/not-found.component";
import { HomeComponent } from './user/components/home/home.component';
import { MyOffersComponent } from './user/components/my-offers/my-offers.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'annonces-jeux-recentes', component: RecentAdvertsComponent },
    { path: 'vendre-mes-jeux', component: SellGamesComponent },
    { path: 'top-jeux-societe', component: PopularGamesComponent },
    { path: 'meilleurs-jeux-societe', component: GameSpotlightComponent },
    
    { path: 'connexion', component: LoginComponent },
    { path: 'inscription', component: RegisterComponent },

    { path: 'annonces', component: AdvertsComponent, children: [
        { path: ':id', component: AdvertSingleComponent },
    ] },

    { path: 'jeux', component: GamesComponent, children: [
        { path: ':id', component: GameSingleComponent },
    ] },

    {
        path: 'mon-compte',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '', 
                children: [
                    { path: '', component: AccountComponent},
                    { path: 'gamebox', component: GameboxComponent},
                    { path: 'mes-offres', component: MyOffersComponent},
                ]
            }
        ]
    },
    { path: 'vendre-mon-jeu', component: SellGameComponent, canActivate: [AuthGuard] },
    { path: 'autour-de-moi', component: NearMeComponent, canActivate: [AuthGuard] },
    { path: 'mon-bazar', redirectTo: 'mon-compte/gamebox'},


    {
        path: 'admin',
        component: AdminHomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '', 
                children: [
                    { path: 'management', component: ManagementComponent },
                    { path: 'add_game', component: AddGameComponent },
                ]
            }
        ]
    },

    { path: '404', component: NotFoundComponent},
    { path: '**', redirectTo: '404' }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        { enableTracing: true }
        )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
