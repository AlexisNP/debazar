import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { SellGameComponent } from "./pages/sell-game/sell-game.component";
import { AdvertsComponent } from "./pages/adverts/adverts.component";
import { LoginComponent } from "./pages/login/login.component";
import { NearMeComponent } from './pages/near-me/near-me.component';
import { GameboxComponent } from "./pages/gamebox/gamebox.component";

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'annonces', component: AdvertsComponent },
    { path: 'vendre-mon-jeu', component: SellGameComponent },
    { path: 'connexion', component: LoginComponent },
    { path: 'autour-de-moi', component: NearMeComponent },
    { path: 'gamebox', component: GameboxComponent },
    { path: '**', component: IndexComponent }
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
