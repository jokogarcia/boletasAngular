import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout'
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { BoletasComponent } from './boletas/boletas.component';
import { NewBoletaComponent } from './boletas/new-boleta/new-boleta.component';
import { VerBoletaComponent } from './boletas/ver-boleta/ver-boleta.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth/auth.service';
import { BoletasService } from './boletas/boletas.service';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {environment} from '../environments/environment';
import { UIService } from './shared/ui.service';
import {StoreModule} from '@ngrx/store';
import { reducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    BoletasComponent,
    NewBoletaComponent,
    VerBoletaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [AuthService,BoletasService, UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
