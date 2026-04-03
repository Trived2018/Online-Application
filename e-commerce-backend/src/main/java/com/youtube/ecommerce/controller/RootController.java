package com.youtube.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * Root Controller - Serves Angular frontend index.html
 * This enables SPA (Single Page Application) routing
 */
@RestController
public class RootController {

    @Autowired
    private ResourceLoader resourceLoader;

    /**
     * Root mapping - serve index.html
     */
    @GetMapping("/")
    public ResponseEntity<Resource> index() {
        try {
            Resource resource = resourceLoader.getResource("classpath:static/index.html");
            return ResponseEntity.ok()
                    .contentType(MediaType.TEXT_HTML)
                    .body(resource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Catch-all for Angular routes - serve index.html
     * This allows Angular routing to work properly
     * Matches any path that doesn't start with api, assets, or index
     */
    @GetMapping("/{x:(?!api|assets|index).*}")
    public ResponseEntity<Resource> forwardToIndex(@PathVariable String x) {
        try {
            Resource resource = resourceLoader.getResource("classpath:static/index.html");
            return ResponseEntity.ok()
                    .contentType(MediaType.TEXT_HTML)
                    .body(resource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
