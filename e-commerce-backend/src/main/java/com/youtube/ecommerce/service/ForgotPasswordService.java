package com.youtube.ecommerce.service;

import com.youtube.ecommerce.dao.UserDao;
import com.youtube.ecommerce.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.regex.Pattern;

@Service
public class ForgotPasswordService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private OtpService otpService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     * Normalize phone number:
     * - Remove all spaces
     * - Remove dashes
     * - Keep only digits and + symbol
     * - Example: "+91 9392767119" -> "+919392767119"
     */
    private String normalizePhoneNumber(String phoneNumber) {
        if (phoneNumber == null) {
            return null;
        }
        // Remove spaces, dashes, and other characters except digits and +
        String normalized = phoneNumber.trim().replaceAll("[\\s\\-\\(\\)]", "");
        System.out.println("DEBUG: Phone number after normalization: " + normalized);
        return normalized;
    }

    /**
     * Validate phone number format (E.164 format: +[1-9]{1,3}[0-9]{1,14})
     */
    private boolean isValidPhoneNumber(String phoneNumber) {
        if (phoneNumber == null || phoneNumber.isEmpty()) {
            return false;
        }
        // E.164 format regex
        Pattern pattern = Pattern.compile("^\\+[1-9]\\d{1,14}$");
        return pattern.matcher(phoneNumber).matches();
    }

    /**
     * Initiate password reset by verifying phone number and sending OTP
     */
    public String initiatePasswordReset(String phoneNumber) {
        System.out.println("DEBUG: initiatePasswordReset received phone: " + phoneNumber);

        // Validate phone number is not empty
        if (phoneNumber == null || phoneNumber.trim().isEmpty()) {
            throw new RuntimeException("Phone number is required");
        }

        // Normalize phone number
        String normalizedPhone = normalizePhoneNumber(phoneNumber);
        System.out.println("DEBUG: Normalized phone: " + normalizedPhone);

        // Validate phone number format
        if (!isValidPhoneNumber(normalizedPhone)) {
            throw new RuntimeException("Invalid phone number format. Please use E.164 format (e.g., +919392767119)");
        }

        // Check if user with this phone number exists
        System.out.println("DEBUG: Searching for user with phone: " + normalizedPhone);
        Optional<User> userOptional = userDao.findByUserPhoneNumber(normalizedPhone);

        if (!userOptional.isPresent()) {
            System.out.println("DEBUG: No user found with phone: " + normalizedPhone);
            throw new RuntimeException("No user account found with this phone number. Please register first.");
        }

        User user = userOptional.get();
        System.out.println("DEBUG: User found: " + user.getUserName());

        // Send OTP using Twilio Verify
        try {
            String status = otpService.sendOtp(normalizedPhone);
            System.out.println("DEBUG: OTP sent successfully with status: " + status);
            return status;
        } catch (Exception e) {
            System.out.println("DEBUG: Error sending OTP: " + e.getMessage());
            throw new RuntimeException("Failed to send OTP. Please check Twilio configuration.");
        }
    }

    /**
     * Verify OTP for password reset
     */
    public boolean verifyOtpForReset(String phoneNumber, String code) {
        System.out.println("DEBUG: verifyOtpForReset received phone: " + phoneNumber + ", code: " + code);

        // Normalize phone number
        String normalizedPhone = normalizePhoneNumber(phoneNumber);
        System.out.println("DEBUG: Normalized phone for verification: " + normalizedPhone);

        // Verify with Twilio
        try {
            boolean verified = otpService.verifyOtp(normalizedPhone, code);
            System.out.println("DEBUG: OTP verification result: " + verified);
            return verified;
        } catch (Exception e) {
            System.out.println("DEBUG: Error verifying OTP: " + e.getMessage());
            throw new RuntimeException("Failed to verify OTP. Please try again.");
        }
    }

    /**
     * Reset password after OTP verification
     */
    public void resetPassword(String phoneNumber, String newPassword, String confirmPassword) {
        System.out.println("DEBUG: resetPassword called for phone: " + phoneNumber);

        // Validate passwords match
        if (!newPassword.equals(confirmPassword)) {
            throw new RuntimeException("Passwords do not match");
        }

        // Validate password not empty
        if (newPassword == null || newPassword.trim().isEmpty()) {
            throw new RuntimeException("Password cannot be empty");
        }

        // Normalize phone number
        String normalizedPhone = normalizePhoneNumber(phoneNumber);

        // Find user by phone number
        System.out.println("DEBUG: Looking up user with phone: " + normalizedPhone);
        Optional<User> userOptional = userDao.findByUserPhoneNumber(normalizedPhone);

        if (!userOptional.isPresent()) {
            System.out.println("DEBUG: User not found for password reset");
            throw new RuntimeException("No user found with this phone number");
        }

        User user = userOptional.get();
        System.out.println("DEBUG: Updating password for user: " + user.getUserName());

        // Encode and update password
        String encodedPassword = passwordEncoder.encode(newPassword);
        user.setUserPassword(encodedPassword);

        // Save updated user
        userDao.save(user);
        System.out.println("DEBUG: Password updated successfully for user: " + user.getUserName());
    }
}
