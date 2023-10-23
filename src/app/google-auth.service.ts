// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// import { BehaviorSubject, Observable } from 'rxjs';
// import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';

// @Injectable({
//   providedIn: 'root',
// })
// export class GoogleAuthService {
//   private loggedIn = new BehaviorSubject<boolean>(false);

//   constructor(
//     // private http: HttpClient,
//     // private router: Router,
//     private socialAuthService: SocialAuthService
//   ) {
//     console.log('i am here in auth service innjection');
//     this.socialAuthService.authState.subscribe((user) => {
//       this.loggedIn.next(user != null);
//     });
//   }

//   public isSignedIn(): Observable<boolean> {
//     return this.loggedIn.asObservable();
//   }
//   public loginWithGoogle() {
//     console.log('i am in loginWithGoogle');
//     // return this.signIn(GoogleLoginProvider.PROVIDER_ID, {
//     //   scope: 'profile email',
//     // });
//   }

//   // public signIn(providerId: string, options?: any) {
//   //   this.socialAuthService.signIn(this.getProviderUri(providerId));
//   // }

//   // public signOut(): void {
//   //   this.socialAuthService.signOut();
//   // }

//   private getProviderUri(providerId: string) {
//     console.log('providerId', providerId);
//     switch (providerId) {
//       case GoogleLoginProvider.PROVIDER_ID:
//         return 'google';

//       default:
//         return 'undefined';
//     }
//   }
// }
