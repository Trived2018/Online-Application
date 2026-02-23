package com.youtube.ecommerce.controller;

import com.youtube.ecommerce.dao.UserDao;
import com.youtube.ecommerce.entity.User;
import com.youtube.ecommerce.service.OnlinePresenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("/api/presence")
public class PresenceController {

    private static final int DEFAULT_ONLINE_WINDOW_SECONDS = 60;

    @Autowired
    private OnlinePresenceService onlinePresenceService;

    @Autowired
    private UserDao userDao;

    @PreAuthorize("isAuthenticated()")
    @PostMapping("/ping")
    public ResponseEntity<Map<String, Object>> ping(Authentication authentication) {
        String userEmail = authentication.getName();
        onlinePresenceService.markOnline(userEmail);

        Map<String, Object> response = new LinkedHashMap<>();
        response.put("message", "Presence updated");
        response.put("userEmail", userEmail);
        response.put("timestamp", System.currentTimeMillis());
        return ResponseEntity.ok(response);
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping("/offline")
    public ResponseEntity<Map<String, Object>> offline(Authentication authentication) {
        String userEmail = authentication.getName();
        onlinePresenceService.markOffline(userEmail);

        Map<String, Object> response = new LinkedHashMap<>();
        response.put("message", "User marked offline");
        response.put("userEmail", userEmail);
        response.put("timestamp", System.currentTimeMillis());
        return ResponseEntity.ok(response);
    }

    @PreAuthorize("hasRole('Admin')")
    @GetMapping("/online-count")
    public ResponseEntity<Map<String, Object>> onlineCount(
            @RequestParam(name = "withinSeconds", defaultValue = "60") int withinSeconds) {
        int effectiveWindow = withinSeconds > 0 ? withinSeconds : DEFAULT_ONLINE_WINDOW_SECONDS;
        long onlineUsers = onlinePresenceService.countOnlineUsers(effectiveWindow);

        Map<String, Object> response = new LinkedHashMap<>();
        response.put("onlineUsers", onlineUsers);
        response.put("withinSeconds", effectiveWindow);
        response.put("timestamp", System.currentTimeMillis());
        return ResponseEntity.ok(response);
    }

    @PreAuthorize("hasRole('Admin')")
    @GetMapping("/online-users")
    public ResponseEntity<List<Map<String, Object>>> onlineUsers(
            @RequestParam(name = "withinSeconds", defaultValue = "60") int withinSeconds) {
        int effectiveWindow = withinSeconds > 0 ? withinSeconds : DEFAULT_ONLINE_WINDOW_SECONDS;

        Map<String, Long> onlineUsersMap = onlinePresenceService.getOnlineUsers(effectiveWindow);
        Set<String> emails = new HashSet<>(onlineUsersMap.keySet());

        Iterable<User> users = userDao.findAllById(emails);
        Map<String, User> userByEmail = new HashMap<>();
        for (User user : users) {
            userByEmail.put(user.getUserName(), user);
        }

        List<Map<String, Object>> response = new ArrayList<>();
        for (Map.Entry<String, Long> onlineEntry : onlineUsersMap.entrySet()) {
            String email = onlineEntry.getKey();
            long lastSeen = onlineEntry.getValue();

            User user = userByEmail.get(email);
            String name = user != null
                    ? ((user.getUserFirstName() + " " + user.getUserLastName()).trim())
                    : "";
            if (name.isEmpty()) {
                name = email;
            }

            String role = "USER";
            if (user != null && user.getRole() != null && !user.getRole().isEmpty()) {
                role = user.getRole().iterator().next().getRoleName().toUpperCase();
            }

            Map<String, Object> onlineUser = new LinkedHashMap<>();
            onlineUser.put("email", email);
            onlineUser.put("name", name);
            onlineUser.put("role", role);
            onlineUser.put("lastSeenEpoch", lastSeen);
            onlineUser.put("lastSeenIso", Instant.ofEpochMilli(lastSeen).toString());
            response.add(onlineUser);
        }

        return ResponseEntity.ok(response);
    }
}
