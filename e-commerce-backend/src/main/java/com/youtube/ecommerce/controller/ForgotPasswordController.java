package com.youtube.ecommerce.controller;

import com.youtube.ecommerce.dto.ForgotPasswordInitiateRequest;
import com.youtube.ecommerce.dto.ForgotPasswordResetRequest;
import com.youtube.ecommerce.dto.ForgotPasswordVerifyRequest;
import com.youtube.ecommerce.service.ForgotPasswordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/forgot-password")
@CrossOrigin
public class ForgotPasswordController {

    @Autowired
    private ForgotPasswordService forgotPasswordService;

    /**
     * Step 1: Initiate password reset - user enters phone number
     */
    @PostMapping("/initiate")
    public ResponseEntity<Map<String, Object>> initiatePasswordReset(
            @RequestBody ForgotPasswordInitiateRequest request) {

        System.out.println("DEBUG: /api/forgot-password/initiate called");
        if (request == null || isBlank(request.getPhoneNumber())) {
            System.out.println("DEBUG: Request validation failed - phoneNumber is blank");
            return ResponseEntity.badRequest().body(errorResponse("Phone number is required"));
        }

        try {
            System.out.println("DEBUG: Processing initiate request with phone: " + request.getPhoneNumber());
            String status = forgotPasswordService.initiatePasswordReset(request.getPhoneNumber());

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "OTP sent to your registered phone number");
            response.put("status", status);
            return ResponseEntity.ok(response);
        } catch (RuntimeException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(errorResponse(ex.getMessage()));
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(errorResponse("Unable to send OTP. Please try again. " + ex.getMessage()));
        }
    }

    /**
     * Step 2: Verify OTP for password reset
     */
    @PostMapping("/verify")
    public ResponseEntity<Map<String, Object>> verifyOtp(
            @RequestBody ForgotPasswordVerifyRequest request) {

        System.out.println("DEBUG: /api/forgot-password/verify called");
        if (request == null || isBlank(request.getPhoneNumber()) || isBlank(request.getCode())) {
            System.out.println("DEBUG: Request validation failed");
            return ResponseEntity.badRequest().body(errorResponse("Phone number and code are required"));
        }

        try {
            System.out.println("DEBUG: Processing verify request");
            boolean verified = forgotPasswordService.verifyOtpForReset(
                    request.getPhoneNumber(),
                    request.getCode()
            );

            Map<String, Object> response = new HashMap<>();
            response.put("success", verified);
            response.put("message", verified ? "OTP verified successfully" : "Invalid or expired OTP");

            if (verified) {
                return ResponseEntity.ok(response);
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (RuntimeException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(errorResponse(ex.getMessage()));
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(errorResponse("Unable to verify OTP. Please try again."));
        }
    }

    /**
     * Step 3: Reset password after OTP verification
     */
    @PostMapping("/reset")
    public ResponseEntity<Map<String, Object>> resetPassword(
            @RequestBody ForgotPasswordResetRequest request) {

        System.out.println("DEBUG: /api/forgot-password/reset called");
        if (request == null || isBlank(request.getPhoneNumber()) ||
                isBlank(request.getNewPassword()) || isBlank(request.getConfirmPassword())) {
            System.out.println("DEBUG: Request validation failed");
            return ResponseEntity.badRequest()
                .body(errorResponse("Phone number, newPassword and confirmPassword are required"));
        }

        try {
            System.out.println("DEBUG: Processing password reset");
            forgotPasswordService.resetPassword(
                    request.getPhoneNumber(),
                    request.getNewPassword(),
                    request.getConfirmPassword()
            );

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Password reset successfully. Please login with your new password.");
            return ResponseEntity.ok(response);
        } catch (RuntimeException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(errorResponse(ex.getMessage()));
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(errorResponse("Unable to reset password. Please try again."));
        }
    }

    private Map<String, Object> errorResponse(String message) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", false);
        response.put("message", message);
        return response;
    }

    private boolean isBlank(String value) {
        return value == null || value.trim().isEmpty();
    }
}
