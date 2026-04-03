package com.youtube.ecommerce.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Root API Controller - Provides basic API information
 */
@RestController
@RequestMapping("/")
public class RootController {

    /**
     * API root endpoint - provides welcome message and basic info
     */
    @GetMapping
    public ResponseEntity<?> root() {
        return ResponseEntity.ok(new ApiResponse(
            "E-Commerce API",
            "Welcome to E-Commerce Backend API",
            "Use /api/actuator/health to check application status",
            "Version: 0.0.1"
        ));
    }

    /**
     * Health check endpoint at root level
     */
    @GetMapping("health")
    public ResponseEntity<?> health() {
        return ResponseEntity.ok(new HealthResponse("UP", "Application is running"));
    }

    /**
     * Helper class for API response
     */
    public static class ApiResponse {
        public String name;
        public String message;
        public String info;
        public String version;

        public ApiResponse(String name, String message, String info, String version) {
            this.name = name;
            this.message = message;
            this.info = info;
            this.version = version;
        }
    }

    /**
     * Helper class for health response
     */
    public static class HealthResponse {
        public String status;
        public String message;

        public HealthResponse(String status, String message) {
            this.status = status;
            this.message = message;
        }
    }
}
