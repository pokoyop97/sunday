import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InsideComponent } from './inside/inside.component';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
 
 
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("AIzaSyCyFN37vUoVDw_iB9DKcpKtpzAO5K6gVPk")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("368389967446561")
  }
]);
 
export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    InsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SocialLoginModule,

    ],
  providers: [{
    provide: AuthServiceConfig,
      useFactory: provideConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
