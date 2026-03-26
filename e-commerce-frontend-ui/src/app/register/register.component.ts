import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { OtpService } from '../_services/otp.service';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // OTP related properties
  phoneNumber: string = '';
  otpCode: string = '';
  isOtpSent: boolean = false;
  isOtpVerified: boolean = false;
  isLoadingSendOtp: boolean = false;
  isLoadingVerifyOtp: boolean = false;

  // Message properties
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private otpService: OtpService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendOtp(): void {
    // Validation
    if (!this.phoneNumber || this.phoneNumber.trim() === '') {
      this.errorMessage = 'Please enter a valid phone number';
      this.successMessage = '';
      return;
    }

    this.isLoadingSendOtp = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.otpService.sendOtp(this.phoneNumber).subscribe(
      (response) => {
        if (response.success) {
          this.isOtpSent = true;
          this.successMessage = response.message;
          this.errorMessage = '';
        } else {
          this.errorMessage = response.message;
          this.successMessage = '';
        }
        this.isLoadingSendOtp = false;
      },
      (error) => {
        // Extract backend error message if available, otherwise use fallback
        this.errorMessage = error?.error?.message || 'You have already registered with this mobile number. Please try a new number.';
        this.successMessage = '';
        this.isLoadingSendOtp = false;
      }
    );
  }

  verifyOtp(): void {
    // Validation
    if (!this.otpCode || this.otpCode.trim() === '') {
      this.errorMessage = 'Please enter the OTP code';
      this.successMessage = '';
      return;
    }

    this.isLoadingVerifyOtp = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.otpService.verifyOtp(this.phoneNumber, this.otpCode).subscribe(
      (response) => {
        if (response.success) {
          this.isOtpVerified = true;
          this.successMessage = response.message;
          this.errorMessage = '';
        } else {
          this.errorMessage = response.message;
          this.successMessage = '';
        }
        this.isLoadingVerifyOtp = false;
      },
      (error) => {
        // Extract backend error message if available, otherwise use fallback
        this.errorMessage = error?.error?.message || 'You have already registered with this mobile number. Please try a new number.';
        this.successMessage = '';
        this.isLoadingVerifyOtp = false;
      }
    );
  }

  register(registerForm: NgForm): void {
    if (!this.isOtpVerified) {
      this.errorMessage = 'Please verify OTP before registering';
      this.successMessage = '';
      return;
    }

    // Add phone number to form data
    const formData = registerForm.value;
    formData.userPhoneNumber = this.phoneNumber;

    console.log(formData);
    this.userService.register(formData).subscribe(
      (response) => {
        this.successMessage = 'Registration successful! Redirecting to login...';
        this.errorMessage = '';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      (error) => {
        console.log('Register Error:', error);
        this.errorMessage = 'Registration failed. Please try again.';
        this.successMessage = '';
      }
    );
  }

  clearMessages(): void {
    this.successMessage = '';
    this.errorMessage = '';
  }

}
