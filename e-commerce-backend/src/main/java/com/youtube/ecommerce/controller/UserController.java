package com.youtube.ecommerce.controller;

import com.youtube.ecommerce.entity.User;
import com.youtube.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    @PostMapping({"/registerNewUser"})
    public ResponseEntity<?> registerNewUser(@RequestBody User user){
        try {
            if (user == null) {
                return ResponseEntity.badRequest().body(errorResponse("User data is required"));
            }
            
            if (user.getUserName() == null || user.getUserName().trim().isEmpty()) {
                return ResponseEntity.badRequest().body(errorResponse("Email/Username is required"));
            }
            
            if (user.getUserPassword() == null || user.getUserPassword().trim().isEmpty()) {
                return ResponseEntity.badRequest().body(errorResponse("Password is required"));
            }
            
            if (user.getUserPhoneNumber() == null || user.getUserPhoneNumber().trim().isEmpty()) {
                return ResponseEntity.badRequest().body(errorResponse("Phone number is required for 2FA/OTP"));
            }

            User registeredUser = userService.registerNewUser(user);
            System.out.println("INFO UserController: Registration successful for user: " + user.getUserName());
            return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
            
        } catch (IllegalArgumentException ex) {
            // Handle validation errors
            System.err.println("VALIDATION ERROR: " + ex.getMessage());
            return ResponseEntity.badRequest().body(errorResponse(ex.getMessage()));
            
        } catch (RuntimeException ex) {
            String errorMsg = ex.getMessage();
            
            // Check if it's a duplicate phone number error
            if (errorMsg != null && errorMsg.contains("phone number") && errorMsg.contains("already exists")) {
                System.out.println("INFO UserController: Duplicate phone number attempt: " + user.getUserPhoneNumber());
                return ResponseEntity.status(HttpStatus.CONFLICT).body(
                    errorResponse("You have already registered with this mobile number. Please try a new number.")
                );
            }
            
            // Check if it's a duplicate email error
            if (errorMsg != null && errorMsg.contains("email") && errorMsg.contains("already exists")) {
                System.out.println("INFO UserController: Duplicate email attempt: " + user.getUserName());
                return ResponseEntity.status(HttpStatus.CONFLICT).body(
                    errorResponse("This email is already registered please update this")
                );
            }
            
            // For other RuntimeExceptions, return the actual error
            System.err.println("ERROR UserController.registerNewUser: " + errorMsg);
            return ResponseEntity.status(HttpStatus.CONFLICT).body(errorResponse(errorMsg));
            
        } catch (Exception ex) {
            System.err.println("ERROR UserController.registerNewUser: Unexpected error: " + ex.getMessage());
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(errorResponse("Registration failed: " + ex.getMessage()));
        }
    }

    private Map<String, Object> errorResponse(String message) {
        Map<String, Object> response = new HashMap<>();
        response.put("success", false);
        response.put("message", message);
        return response;
    }

   // @PostMapping({"/registerNewUser"})
   // public User registerNewUser(@RequestBody User user) {
   //     return userService.registerNewUser(user);
    // }

    @GetMapping({"/forAdmin"})
    @PreAuthorize("hasRole('Admin')")
    public String forAdmin(){
        return "This URL is only accessible to the admin";
    }

    @GetMapping({"/forUser"})
    @PreAuthorize("hasRole('User')")
    public String forUser(){
        return "This URL is only accessible to the user";
    }
}