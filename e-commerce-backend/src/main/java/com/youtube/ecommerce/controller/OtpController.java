package com.youtube.ecommerce.controller;

import com.youtube.ecommerce.dto.OtpSendRequest;
import com.youtube.ecommerce.dto.OtpVerifyRequest;
import com.youtube.ecommerce.service.OtpService;
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
@RequestMapping("/api/otp")
@CrossOrigin
public class OtpController {

    @Autowired
    private OtpService otpService;

    @PostMapping("/send")
    public ResponseEntity<Map<String, Object>> sendOtp(@RequestBody OtpSendRequest request) {
        if (request == null || isBlank(request.getPhoneNumber())) {
            return ResponseEntity.badRequest().body(errorResponse("phoneNumber is required"));
        }

        try {
            String status = otpService.sendOtp(request.getPhoneNumber());

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "OTP sent successfully");
            response.put("status", status);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(errorResponse("Unable to send OTP. Please check Twilio configuration and phone number."));
        }
    }

    @PostMapping("/verify")
    public ResponseEntity<Map<String, Object>> verifyOtp(@RequestBody OtpVerifyRequest request) {
        if (request == null || isBlank(request.getPhoneNumber()) || isBlank(request.getCode())) {
            return ResponseEntity.badRequest().body(errorResponse("phoneNumber and code are required"));
        }

        try {
            boolean verified = otpService.verifyOtp(request.getPhoneNumber(), request.getCode());

            Map<String, Object> response = new HashMap<>();
            response.put("success", verified);
            response.put("message", verified ? "OTP verified successfully" : "Invalid or expired OTP");

            if (verified) {
                return ResponseEntity.ok(response);
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(errorResponse("Unable to verify OTP. Please try again."));
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
