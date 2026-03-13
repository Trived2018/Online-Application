import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PresenceService } from '../_services/presence.service';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private presenceService: PresenceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    // Clear previous error message
    this.errorMessage = '';

    // Validate empty fields
    if (!loginForm.value.userName || !loginForm.value.userName.trim()) {
      this.errorMessage = 'Username is required';
      return;
    }
    if (!loginForm.value.userPassword || !loginForm.value.userPassword.trim()) {
      this.errorMessage = 'Password is required';
      return;
    }

    this.isLoading = true;
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        this.isLoading = false;
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
        this.presenceService.startHeartbeat();

        const role = response.user.role[0].roleName;
        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/']);
        }
      },
      (error) => {
        this.isLoading = false;
        // Handle 401 Unauthorized response
        if (error.status === 401) {
          this.errorMessage = error.error?.message || 'Invalid username or password';
        } else if (error.status === 0) {
          this.errorMessage = 'Cannot connect to server. Please check if backend is running.';
        } else {
          this.errorMessage = 'An error occurred. Please try again.';
        }
        console.log('Login error:', error);
      }
    );
  }

  registerUser() {
    this.router.navigate(['/register']);
  }
}
