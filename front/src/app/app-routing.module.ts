import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { SellGameComponent } from "./pages/sell-game/sell-game.component";
import { AdvertsComponent } from "./pages/adverts/adverts.component";
import { NearMeComponent } from './pages/near-me/near-me.component';
import { GameboxComponent } from "./pages/gamebox/gamebox.component";

import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { AuthGuard } from './global/auth/auth.guard';

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'annonces', component: AdvertsComponent },
    
    { path: 'connexion', component: LoginComponent },
    { path: 'inscription', component: RegisterComponent },

    { path: 'vendre-mon-jeu', component: SellGameComponent, canActivate: [AuthGuard], },
    { path: 'autour-de-moi', component: NearMeComponent, canActivate: [AuthGuard], },
    { path: 'gamebox', component: GameboxComponent, canActivate: [AuthGuard], },

    { path: '**', component: IndexComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        // Debug stuff
        // { enableTracing: true }
        )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
