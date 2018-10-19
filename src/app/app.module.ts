import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';

//routes
import { APP_ROUTING } from "./app.routes";

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
    HttpClientModule,
    BrowserModule,    
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
