import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './global/components/index/index.component';
import { AdvertsComponent } from "./global/components/adverts/adverts.component";

import { LoginComponent } from "./Authentication/components/login/login.component";
import { RegisterComponent } from "./Authentication/components/register/register.component";

import { AuthGuard } from './Authentication/auth/auth.guard';

import { AccountComponent } from './user/components/account/account.component';
import { SellGameComponent } from "./user/components/sell-game/sell-game.component";
import { NearMeComponent } from './user/components/near-me/near-me.component';
import { GameboxComponent } from "./user/components/gamebox/gamebox.component";

import { AdminHomeComponent } from './administration/components/admin-home/admin-home.component';
import { ManagementComponent } from './administration/components/management/management.component';

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'annonces', component: AdvertsComponent },
    
    { path: 'connexion', component: LoginComponent },
    { path: 'inscription', component: RegisterComponent },

    // { 
    //     path: 'mon-compte', 
    //     component: AccountComponent, 
    //     canActivate: [AuthGuard],
    //     children: [
            {
                path: '', 
                canActivateChild: [AuthGuard],
                children: [
                    { path: 'mon-compte', component: AccountComponent},
                    { path: 'gamebox', component: GameboxComponent},
            //     ]
            // }
        ]
    },
    { path: 'vendre-mon-jeu', component: SellGameComponent, canActivate: [AuthGuard] },
    { path: 'autour-de-moi', component: NearMeComponent, canActivate: [AuthGuard] },

    { 
        path: 'admin',
        component: AdminHomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '', 
                canActivateChild: [AuthGuard],
                children: [
                    { path: 'management', component: ManagementComponent },
                ]
            }
        ]
    },

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
