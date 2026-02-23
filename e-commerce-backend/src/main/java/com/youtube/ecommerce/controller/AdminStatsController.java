package com.youtube.ecommerce.controller;

import com.youtube.ecommerce.dao.UserDao;
import com.youtube.ecommerce.service.OnlinePresenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin/stats")
@PreAuthorize("hasRole('Admin')")
public class AdminStatsController {

    @Autowired
    private UserDao userDao;

    @Autowired
    private OnlinePresenceService onlinePresenceService;

    @GetMapping("/total-users")
    public ResponseEntity<Map<String, Object>> totalUsers() {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("totalUsers", userDao.count());
        response.put("timestamp", System.currentTimeMillis());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/online-users")
    public ResponseEntity<Map<String, Object>> onlineUsers() {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("onlineUsers", onlinePresenceService.countOnlineUsers(60));
        response.put("withinSeconds", 60);
        response.put("timestamp", System.currentTimeMillis());
        return ResponseEntity.ok(response);
    }
}

