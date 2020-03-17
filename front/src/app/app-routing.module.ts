import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from '../app/pages/index/index.component';
import { SellGameComponent } from "../app/pages/sell-game/sell-game.component";
import { AdvertsComponent } from "../app/pages/adverts/adverts.component";
import { LoginComponent } from "../app/pages/login/login.component";

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'annonces', component: AdvertsComponent },
    { path: 'vendre-mon-jeu', component: SellGameComponent },
    { path: 'connexion', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        // Debug stuff
        { enableTracing: true }
        )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
