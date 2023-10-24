import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { EnvironmentService } from '../environment.service';
// import { GoogleAuthService } from '../google-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GoogleAuthService } from '../google-auth.service';

declare var google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    // private googleAuthService: GoogleAuthService,
    // private environmentService: EnvironmentService,
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService,
    private googleAuthService: GoogleAuthService
  ) {}
  // userProfile: any;

  ngOnInit() {
    // Clear cookies
    this.cookieService.deleteAll();
    // console.log('userProfile in login', this.userProfile);
  }

  // googleClientId(): string {
  //   return this.environmentService.googleClientId;
  // }

  // handleCredentialResponse(response: any) {
  //   const idToken = response.credential;
  //   console.log('idToken', idToken);
  //   this.googleAuthService.authenticate(idToken).subscribe(
  //     (data) => {
  //       console.log('Authentication successful:', data);
  //       // Handle successful authentication, e.g., redirect to dashboard
  //     },
  //     (error) => {
  //       console.error('Authentication failed:', error);
  //       // Handle authentication error
  //     }
  //   );
  // }

  // handleGoogleSignIn() {
  //   console.log('Attempting Google Sign-In...');
  //   if (typeof google.accounts.id !== 'undefined') {
  //     console.log('Google Sign-In API is available.');
  //     google.accounts.id.prompt();
  //     google.accounts.id.disableAutoSelect();
  //   } else {
  //     console.error('Google Sign-In API is not available.');
  //   }
  // }
}

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
// })
// export class LoginComponent implements OnInit {
//   constructor(private environmentService: EnvironmentService) {}

//   get googleClientId(): string {
//     return this.environmentService.googleClientId;
//   }
//   public username: string = '';
//   public password: string = '';

//   ngOnInit() {}

//   onSubmit() {
//     console.log(`Username: ${this.username}, Password: ${this.password}`);
//   }
// }
