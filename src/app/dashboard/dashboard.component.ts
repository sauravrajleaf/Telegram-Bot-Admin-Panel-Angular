import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var handleSignout: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private router: Router) {}
  userProfile: any;
  ngOnInit() {
    this.userProfile = JSON.parse(sessionStorage.getItem('loggedInUser') || '');
  }
  handleSignOut() {
    handleSignout();
    sessionStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
