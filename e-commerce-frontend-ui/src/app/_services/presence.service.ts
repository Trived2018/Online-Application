import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subscription, interval } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

interface OnlineCountResponse {
  onlineUsers: number;
}

export interface OnlineUser {
  email: string;
  name: string;
  role: string;
  lastSeenEpoch: number;
  lastSeenIso: string;
}

@Injectable({
  providedIn: 'root',
})
export class PresenceService {
  private readonly baseUrl = '/api/presence';
  private heartbeatSubscription: Subscription | null = null;

  constructor(private httpClient: HttpClient) {}

  ping(): Observable<object> {
    return this.httpClient.post(`${this.baseUrl}/ping`, {});
  }

  offline(): Observable<object> {
    return this.httpClient.post(`${this.baseUrl}/offline`, {});
  }

  getOnlineCount(withinSeconds: number = 60): Observable<OnlineCountResponse> {
    return this.httpClient.get<OnlineCountResponse>(`${this.baseUrl}/online-count?withinSeconds=${withinSeconds}`);
  }

  getOnlineUsers(withinSeconds: number = 60): Observable<OnlineUser[]> {
    return this.httpClient.get<OnlineUser[]>(`${this.baseUrl}/online-users?withinSeconds=${withinSeconds}`);
  }

  startHeartbeat(): void {
    if (this.heartbeatSubscription) {
      return;
    }

    this.ping().pipe(catchError(() => EMPTY)).subscribe();

    this.heartbeatSubscription = interval(25000)
      .pipe(
        switchMap(() =>
          this.ping().pipe(catchError(() => EMPTY))
        )
      )
      .subscribe();
  }

  stopHeartbeatAndMarkOffline(): void {
    if (this.heartbeatSubscription) {
      this.heartbeatSubscription.unsubscribe();
      this.heartbeatSubscription = null;
    }

    this.offline().pipe(catchError(() => EMPTY)).subscribe();
  }
}
