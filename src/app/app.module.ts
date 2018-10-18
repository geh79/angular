import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//components
import { LanzamientosComponent } from './components/lanzamientos/lanzamientos.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';


@NgModule({
  declarations: [
    AppComponent,
    LanzamientosComponent,
    HomeComponent,
    ArtistaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
