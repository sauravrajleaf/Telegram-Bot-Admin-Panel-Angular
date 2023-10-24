import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthService } from '../google-auth.service';

@Component({
  selector: 'app-auth-resolver',
  template: '<div *ngIf="loading">Loading...</div>', // Loading indicator
})
export class AuthResolverComponent implements OnInit {
  loading = true;

  constructor(
    private router: Router,
    private googleAuthService: GoogleAuthService
  ) {}

  userProfile: any;

  ngOnInit() {
    this.googleAuthService.getAuthenticatedUser().subscribe(
      (response) => {
        if (response) {
          try {
            console.log('response', response[0]);
            this.googleAuthService.setAuthenticated(true);
            this.router.navigate(['/dashboard'], {
              state: { userProfile: response },
            });
            // Handle user data
          } catch (error) {
            console.error('Error parsing JSON response:', error);
            this.router.navigate(['/login']);
            // Handle parsing error
          }
        } else {
          console.error('Empty response received');
          // Handle empty response
        }
      },
      (error) => {
        console.error('Error occurred during authentication:', error);
        // Handle other errors
      }
    );
  }
}
