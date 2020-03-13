import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from '../app/pages/index/index.component';
import { AdvertsComponent } from "../app/pages/adverts/adverts.component";

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'annonces', component: AdvertsComponent },
    { path: 'jeux', component: AdvertsComponent },
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
