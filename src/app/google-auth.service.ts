import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleAuthService {
  // private googleClientId = '';
  // private backendApiUrl = 'http://localhost:3000/auth/login';

  private isAuthenticatedSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> =
    this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000/auth/authenticated-user'; // Adjust the API endpoint

  private userProfile: any; // Private variable to store user data
  private userProfileKey = 'userProfile';

  setUserProfile(userProfile: any) {
    this.userProfile = userProfile;
    localStorage.setItem(this.userProfileKey, JSON.stringify(userProfile));
  }

  getUserProfile() {
    const userProfileString = localStorage.getItem(this.userProfileKey);
    return userProfileString ? JSON.parse(userProfileString) : null;
  }

  clearUserProfile() {
    this.userProfile = null;
    localStorage.removeItem(this.userProfileKey);
  }

  getAuthenticatedUser(): Observable<any> {
    console.log('thissssssssssssss', this.http.get<any>(this.apiUrl));
    return this.http.get<any>(this.apiUrl);
  }

  // Method to set the authentication status
  setAuthenticated(value: boolean) {
    this.isAuthenticatedSubject.next(value);
  }

  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
  // authenticate(idToken: string) {
  //   console.log('i am in google service authenticate');
  //   return this.http.post(this.backendApiUrl, { idToken });
  // }
}

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
