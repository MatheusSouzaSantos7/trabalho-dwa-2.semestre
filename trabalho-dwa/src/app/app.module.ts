import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Importações criadas por Matheus Angelo
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Matheus Souza - Necessário para o formuário de postagem funcionar.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
