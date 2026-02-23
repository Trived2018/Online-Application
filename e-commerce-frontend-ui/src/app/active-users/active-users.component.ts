import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { PresenceService, OnlineUser } from '../_services/presence.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit, OnDestroy {
  onlineUsersCount = 0;
  onlineUsers: OnlineUser[] = [];
  isLoading = false;
  errorMessage = '';
  private refreshSubscription: Subscription | null = null;

  constructor(private presenceService: PresenceService) {}

  ngOnInit(): void {
    this.loadPresenceData();
    this.refreshSubscription = interval(15000).subscribe(() => this.loadPresenceData());
  }

  ngOnDestroy(): void {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
      this.refreshSubscription = null;
    }
  }

  loadPresenceData(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.presenceService.getOnlineCount(60).pipe(
      catchError(() => {
        this.errorMessage = 'Unable to load online users count.';
        return of({ onlineUsers: 0 });
      })
    ).subscribe((countResponse) => {
      this.onlineUsersCount = countResponse.onlineUsers || 0;
    });

    this.presenceService.getOnlineUsers(60).pipe(
      catchError(() => {
        this.errorMessage = this.errorMessage || 'Unable to load online users list.';
        return of([]);
      })
    ).subscribe((users) => {
      this.onlineUsers = users;
      this.isLoading = false;
    });
  }

  formatLastSeen(lastSeenIso: string): string {
    const parsedDate = new Date(lastSeenIso);
    if (Number.isNaN(parsedDate.getTime())) {
      return lastSeenIso;
    }
    return parsedDate.toLocaleString();
  }
}

