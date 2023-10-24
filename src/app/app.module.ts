import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { GoogleAuth } from './google-auth.module';
// import { GoogleAuthService } from './google-auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, UserCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  // providers: [GoogleAuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
