import { Component, OnInit } from '@angular/core';
import { PresenceService } from './_services/presence.service';
import { UserAuthService } from './_services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E-Commerce Application';

  constructor(
    private userAuthService: UserAuthService,
    private presenceService: PresenceService
  ) {}

  ngOnInit(): void {
    if (this.userAuthService.isLoggedIn()) {
      this.presenceService.startHeartbeat();
    }
  }
}
