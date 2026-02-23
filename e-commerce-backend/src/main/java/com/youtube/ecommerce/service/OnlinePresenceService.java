package com.youtube.ecommerce.service;

import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@Service
public class OnlinePresenceService {

    private final ConcurrentHashMap<String, Long> lastSeenByUser = new ConcurrentHashMap<>();

    public void markOnline(String email) {
        if (email == null || email.trim().isEmpty()) {
            return;
        }
        lastSeenByUser.put(email, System.currentTimeMillis());
    }

    public void markOffline(String email) {
        if (email == null || email.trim().isEmpty()) {
            return;
        }
        lastSeenByUser.remove(email);
    }

    public long countOnlineUsers(int withinSeconds) {
        return getOnlineUsers(withinSeconds).size();
    }

    public Map<String, Long> getOnlineUsers(int withinSeconds) {
        if (withinSeconds <= 0) {
            return Collections.emptyMap();
        }

        long threshold = System.currentTimeMillis() - (withinSeconds * 1000L);
        lastSeenByUser.entrySet().removeIf(entry -> entry.getValue() < threshold);

        return lastSeenByUser.entrySet().stream()
                .filter(entry -> entry.getValue() >= threshold)
                .sorted((a, b) -> Long.compare(b.getValue(), a.getValue()))
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        Map.Entry::getValue,
                        (left, right) -> left,
                        LinkedHashMap::new
                ));
    }
}
