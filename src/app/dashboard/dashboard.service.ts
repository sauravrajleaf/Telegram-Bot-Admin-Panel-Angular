import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl =
    'https://daily-weather-telegram-bot-production.up.railway.app/user/getUser'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Fetch user data from the backend
  getUserData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
