import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EnvironmentService } from '../environment.service';
// import { GoogleAuthService } from '../google-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private environmentService: EnvironmentService) {}

  get googleClientId(): string {
    return this.environmentService.googleClientId;
  }
  public username: string = '';
  public password: string = '';

  ngOnInit() {}

  onSubmit() {
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }
}
