import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { GoogleAuth } from './google-auth.module';
// import { GoogleAuthService } from './google-auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthResolverComponent } from './auth-resolver/auth-resolver.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [AppComponent, AuthResolverComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
