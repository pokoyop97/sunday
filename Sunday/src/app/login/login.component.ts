import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: any = SocialUser;

  constructor(private authService: AuthService, private router: Router) {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
   }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
      x =>console.log(x);
      this.user = userData;
      this.onLoginRedirect();
    }).catch(err => console.log('err', err.message));
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      this.onLoginRedirect();
      this.user = userData;
    }).catch(err => console.log('err', err.message));
  }

  signOut(): void {
    this.authService.signOut();
  }
  onLoginRedirect(): void {
    this.router.navigate(['/refi']);
  }
 /*  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signOut(): void {
    this.authService.signOut().then(x => console.log('saliste de la pagina'));
  }
  registrar(): void{
    var email = document.getElementById('email');
    var password = document.getElementById('password');
     console.log(email);
     console.log(password);
    
  } */
}
