import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthService } from '../google-auth.service';
import { CookieService } from 'ngx-cookie-service';

declare var handleSignout: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  userProfile: any;

  constructor(
    private router: Router,
    private googleAuthService: GoogleAuthService,
    private cookieService: CookieService
  ) {
    this.userProfile = this.googleAuthService.getUserProfile(); // Get user data from the service
    if (!this.userProfile) {
      // If user data is not available, redirect to login page
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    // Check if the user is authenticated
    const isAuthenticated = this.googleAuthService.getUserProfile();
    console.log('isAuthenticated', isAuthenticated);
    if (!isAuthenticated) {
      // If not authenticated, redirect to login page
      this.router.navigate(['/login']);
    } else {
      // If authenticated, get user data from the service
      this.userProfile = this.googleAuthService.getUserProfile();
    }
  }

  navigateToDashboard() {
    // Redirect to the dashboard route
    this.router.navigate(['/dashboard']);
  }

  handleSignOut() {
    // Handle signout logic here
    // Clear cookies
    this.cookieService.deleteAll();
    this.googleAuthService.clearUserProfile(); // Clear user data when signing out
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
