import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { CartStateService } from '../_services/cart-state.service';
import { PresenceService } from '../_services/presence.service';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  searchKeyword: string = '';
  cartItemCount: number = 0;
  private destroy$ = new Subject<void>();

  constructor(
    private userAuthService: UserAuthService,
    private cartStateService: CartStateService,
    private presenceService: PresenceService,
    private router: Router,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.cartStateService.cartItemCount$
      .pipe(takeUntil(this.destroy$))
      .subscribe((count) => {
        this.cartItemCount = count;
      });

    this.cartStateService.refreshCartCount();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.destroy$))
      .subscribe(() => {
        this.cartStateService.refreshCartCount();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.presenceService.stopHeartbeatAndMarkOffline();
    this.userAuthService.clear();
    this.cartStateService.resetCartCount();
    this.router.navigate(['/']);
  }
  public isAdmin(){
    return this.isLoggedIn() && this.userAuthService.isAdmin();
  }
  public isUser(){
    return this.isLoggedIn() && this.userAuthService.isUser();
  }

  public searchProducts(): void {
    const keyword = (this.searchKeyword || '').trim();
    this.router.navigate(['/'], {
      queryParams: keyword ? { search: keyword } : {}
    });
  }

}
