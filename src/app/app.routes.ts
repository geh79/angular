
import { RouterModule, Routes } from '@angular/router';
import { LanzamientosComponent } from './components/lanzamientos/lanzamientos.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'lanzamientos', component: LanzamientosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});