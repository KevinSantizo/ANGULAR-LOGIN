import  { BrowserModule }         from '@angular/platform-browser';
import  { NgModule }              from '@angular/core';
import  { AppRoutingModule }      from './app-routing.module';
import  { AppComponent }          from './app.component';
import  { NavbarComponent }       from './shared/navbar/navbar.component';
import  { ReactiveFormsModule }   from '@angular/forms';
import  { AngularFireAuthModule } from '@angular/fire/auth';
import  { AngularFireModule }     from '@angular/fire';
import { environment } from 'src/environments/environment';
import { SendEmailComponent } from './auth/send-email/send-email.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SendEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    //Inicializar la conexión a Firebase y las autenticaciones
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
