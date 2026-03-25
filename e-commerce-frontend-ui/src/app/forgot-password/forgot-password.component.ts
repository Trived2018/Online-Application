import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from '../_services/forgot-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  // Step tracking
  currentStep: number = 1; // 1, 2, or 3

  // Form fields
  phoneNumber: string = '';
  otpCode: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  // Loading states
  isLoadingInitiate: boolean = false;
  isLoadingVerify: boolean = false;
  isLoadingReset: boolean = false;

  // Message states
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private forgotPasswordService: ForgotPasswordService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // Step 1: Initiate password reset with phone number
  initiatePasswordReset(): void {
    if (!this.phoneNumber || this.phoneNumber.trim() === '') {
      this.errorMessage = 'Please enter a valid phone number';
      this.successMessage = '';
      return;
    }

     const trimmedPhone = this.phoneNumber.trim();
     console.log('Initiating password reset with phone:', trimmedPhone);

    this.isLoadingInitiate = true;
    this.errorMessage = '';
    this.successMessage = '';

     this.forgotPasswordService.initiatePasswordReset(trimmedPhone).subscribe(
      (response) => {
        if (response.success) {
          this.currentStep = 2;
          this.successMessage = response.message;
          this.errorMessage = '';
        } else {
          this.errorMessage = response.message;
          this.successMessage = '';
        }
        this.isLoadingInitiate = false;
      },
      (error) => {
         console.log('Initiate Reset Error:', error);
         if (error.error && error.error.message) {
           this.errorMessage = error.error.message;
         } else if (error.status === 0) {
           this.errorMessage = 'Cannot connect to server. Please check if backend is running.';
         } else if (error.error) {
           this.errorMessage = error.error.message || 'Unable to initiate password reset.';
         } else {
        this.errorMessage = 'Unable to initiate password reset. Please check phone number and try again.';
         }
        this.successMessage = '';
        this.isLoadingInitiate = false;
      }
    );
  }

  // Step 2: Verify OTP
  verifyOtpForReset(): void {
    if (!this.otpCode || this.otpCode.trim() === '') {
      this.errorMessage = 'Please enter the OTP code';
      this.successMessage = '';
      return;
    }

    this.isLoadingVerify = true;
    this.errorMessage = '';
    this.successMessage = '';

     const trimmedPhone = this.phoneNumber.trim();
     const trimmedCode = this.otpCode.trim();
     console.log('Verifying OTP for phone:', trimmedPhone);

     this.forgotPasswordService.verifyOtpForReset(trimmedPhone, trimmedCode).subscribe(
      (response) => {
        if (response.success) {
          this.currentStep = 3;
          this.successMessage = response.message;
          this.errorMessage = '';
        } else {
          this.errorMessage = response.message;
          this.successMessage = '';
        }
        this.isLoadingVerify = false;
      },
      (error) => {
        console.log('Verify OTP Error:', error);
         if (error.error && error.error.message) {
           this.errorMessage = error.error.message;
         } else if (error.status === 0) {
           this.errorMessage = 'Cannot connect to server. Backend service may be down.';
         } else if (error.error) {
           this.errorMessage = error.error.message || 'Invalid or expired OTP.';
         } else {
        this.errorMessage = 'Unable to verify OTP. Please check the code and try again.';
         }
        this.successMessage = '';
        this.isLoadingVerify = false;
      }
    );
  }

  // Step 3: Reset password
  resetPassword(): void {
    // Validate passwords
    if (!this.newPassword || this.newPassword.trim() === '') {
      this.errorMessage = 'Please enter a new password';
      this.successMessage = '';
      return;
    }

    if (!this.confirmPassword || this.confirmPassword.trim() === '') {
      this.errorMessage = 'Please confirm your password';
      this.successMessage = '';
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      this.successMessage = '';
      return;
    }

    this.isLoadingReset = true;
    this.errorMessage = '';
    this.successMessage = '';

     const trimmedPhone = this.phoneNumber.trim();
     console.log('Resetting password for phone:', trimmedPhone);

    this.forgotPasswordService.resetPassword(
       trimmedPhone,
      this.newPassword,
      this.confirmPassword
    ).subscribe(
      (response) => {
        if (response.success) {
          this.successMessage = response.message;
          this.errorMessage = '';
          // Redirect to login after 2 seconds
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        } else {
          this.errorMessage = response.message;
          this.successMessage = '';
        }
        this.isLoadingReset = false;
      },
      (error) => {
        console.log('Reset Password Error:', error);
         if (error.error && error.error.message) {
           this.errorMessage = error.error.message;
         } else if (error.status === 0) {
           this.errorMessage = 'Cannot connect to server. Backend service may be down.';
         } else if (error.error) {
           this.errorMessage = error.error.message || 'Unable to reset password.';
         } else {
        this.errorMessage = 'Unable to reset password. Please try again.';
         }
        this.successMessage = '';
        this.isLoadingReset = false;
      }
    );
  }

  // Go back to previous step
  goBack(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.clearMessages();
    } else {
      this.router.navigate(['/login']);
    }
  }

  // Clear all messages
  clearMessages(): void {
    this.successMessage = '';
    this.errorMessage = '';
  }

}
