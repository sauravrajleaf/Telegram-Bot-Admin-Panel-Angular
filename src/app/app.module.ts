import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { GoogleAuth } from './google-auth.module';
// import { GoogleAuthService } from './google-auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthResolverComponent } from './auth-resolver/auth-resolver.component';
@NgModule({
  declarations: [AppComponent, AuthResolverComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  // providers: [GoogleAuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
