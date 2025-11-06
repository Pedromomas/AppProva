// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// 1. IMPORTA A FERRAMENTA DE HTTP
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Imports do Firebase (do seu projeto)
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment'; 

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,

    HttpClientModule, // 2. ADICIONA A FERRAMENTA AQUI

    // Configuração do Firebase (do seu projeto)
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}