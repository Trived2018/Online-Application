import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PresenceService } from '../_services/presence.service';

interface TotalUsersResponse {
  totalUsers: number;
}

interface OnlineUsersResponse {
  onlineUsers: number;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  totalUsers = 0;
  onlineUsers = 0;
  isLoading = false;
  errorMessage = '';

  constructor(
    private httpClient: HttpClient,
    private presenceService: PresenceService
  ) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.isLoading = true;
    this.errorMessage = '';

    forkJoin({
      total: this.httpClient
        .get<TotalUsersResponse>('/api/admin/stats/total-users')
        .pipe(catchError(() => of({ totalUsers: 0 }))),
      online: this.httpClient
        .get<OnlineUsersResponse>('/api/admin/stats/online-users')
        .pipe(catchError(() => this.presenceService.getOnlineCount()))
        .pipe(catchError(() => of({ onlineUsers: 0 }))),
    }).subscribe(
      ({ total, online }) => {
        this.totalUsers = total.totalUsers || 0;
        this.onlineUsers = online.onlineUsers || 0;
        this.isLoading = false;
      },
      () => {
        this.errorMessage = 'Unable to load admin stats right now.';
        this.isLoading = false;
      }
    );
  }
}

