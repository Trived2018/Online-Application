package com.youtube.ecommerce.service;

import com.twilio.Twilio;
import com.twilio.rest.verify.v2.service.Verification;
import com.twilio.rest.verify.v2.service.VerificationCheck;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

/**
 * OTP Service using Twilio Verify API for 2FA
 * 
 * IMPORTANT - Twilio Trial Account Limitation:
 * By default, Twilio trial accounts can ONLY send SMS to verified phone numbers.
 * If OTP is not being sent to new users:
 * 1. Upgrade from Trial to Paid Account, OR
 * 2. Verify phone numbers in Twilio Console under Phone Numbers > Verified Caller IDs
 * 3. For development/testing, add test phone numbers in Twilio Console
 * 
 * To upgrade or verify numbers:
 * - Go to https://console.twilio.com
 * - Verify your own phone number as the primary account owner
 * - Add additional verified numbers for testing
 * - Or upgrade to a paid account for unrestricted SMS
 */

@Service
public class OtpService {

    @Value("${twilio.account.sid}")
    private String accountSid;

    @Value("${twilio.auth.token}")
    private String authToken;

    @Value("${twilio.verify.service.sid}")
    private String verifyServiceSid;

    @PostConstruct
    public void initializeTwilio() {
        System.out.println("INFO OtpService: Initializing Twilio...");
        System.out.println("INFO OtpService: Account SID = " + (accountSid != null ? "SET" : "NULL"));
        System.out.println("INFO OtpService: Auth Token = " + (authToken != null ? "SET" : "NULL"));
        System.out.println("INFO OtpService: Verify Service SID = " + (verifyServiceSid != null ? verifyServiceSid : "NULL"));
        System.out.println("INFO OtpService: NOTE - Trial accounts can ONLY send OTP to verified numbers. See OtpService.java for details on how to add verified numbers.");
        
        if (accountSid == null || authToken == null || verifyServiceSid == null) {
            throw new RuntimeException("Twilio configuration is incomplete. Check application.properties for twilio.account.sid, twilio.auth.token, and twilio.verify.service.sid");
        }
        
        Twilio.init(accountSid, authToken);
        System.out.println("INFO OtpService: Twilio initialized successfully with 2FA delivery method: sms");
    }

    private String normalizePhoneNumber(String phoneNumber) {
        if (phoneNumber == null) {
            return null;
        }
        return phoneNumber.trim().replaceAll("[\\s\\-\\(\\)]", "");
    }

    public String sendOtp(String phoneNumber) {
        String normalizedPhone = normalizePhoneNumber(phoneNumber);
        System.out.println("DEBUG OtpService.sendOtp: Attempting to send OTP to " + normalizedPhone);
        
        try {
            Verification verification = Verification
                    .creator(verifyServiceSid, normalizedPhone, "sms")
                    .create();
            
            System.out.println("DEBUG OtpService.sendOtp: OTP sent successfully. Status = " + verification.getStatus());
            return verification.getStatus();
        } catch (Exception ex) {
            System.err.println("ERROR OtpService.sendOtp: Failed to send OTP to " + normalizedPhone);
            ex.printStackTrace();
            throw new RuntimeException("Twilio OTP send failed: " + ex.getMessage(), ex);
        }
    }

    public boolean verifyOtp(String phoneNumber, String code) {
        String normalizedPhone = normalizePhoneNumber(phoneNumber);
        System.out.println("DEBUG OtpService.verifyOtp: Attempting to verify OTP for " + normalizedPhone);
        
        try {
            VerificationCheck verificationCheck = VerificationCheck
                    .creator(verifyServiceSid)
                    .setTo(normalizedPhone)
                    .setCode(code)
                    .create();
            
            boolean isApproved = "approved".equalsIgnoreCase(verificationCheck.getStatus());
            System.out.println("DEBUG OtpService.verifyOtp: Verification status = " + verificationCheck.getStatus() + ", approved = " + isApproved);
            return isApproved;
        } catch (Exception ex) {
            System.err.println("ERROR OtpService.verifyOtp: Failed to verify OTP for " + normalizedPhone);
            ex.printStackTrace();
            throw new RuntimeException("Twilio OTP verify failed: " + ex.getMessage(), ex);
        }
    }
}
