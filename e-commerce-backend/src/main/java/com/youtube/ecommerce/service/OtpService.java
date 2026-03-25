package com.youtube.ecommerce.service;

import com.twilio.Twilio;
import com.twilio.rest.verify.v2.service.Verification;
import com.twilio.rest.verify.v2.service.VerificationCheck;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

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
        Twilio.init(accountSid, authToken);
    }

    private String normalizePhoneNumber(String phoneNumber) {
        if (phoneNumber == null) {
            return null;
        }
        return phoneNumber.trim().replaceAll("[\\s\\-\\(\\)]", "");
    }

    public String sendOtp(String phoneNumber) {
        String normalizedPhone = normalizePhoneNumber(phoneNumber);
        System.out.println("DEBUG OtpService.sendOtp: " + normalizedPhone);
        Verification verification = Verification
                .creator(verifyServiceSid, normalizedPhone, "sms")
                .create();

        return verification.getStatus();
    }

    public boolean verifyOtp(String phoneNumber, String code) {
        String normalizedPhone = normalizePhoneNumber(phoneNumber);
        System.out.println("DEBUG OtpService.verifyOtp: " + normalizedPhone);
        VerificationCheck verificationCheck = VerificationCheck
                .creator(verifyServiceSid)
                .setTo(normalizedPhone)
                .setCode(code)
                .create();

        return "approved".equalsIgnoreCase(verificationCheck.getStatus());
    }
}
