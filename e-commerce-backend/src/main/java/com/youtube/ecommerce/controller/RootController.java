package com.youtube.ecommerce.controller;

import org.springframework.core.io.ClassPathResource;
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

    /**
     * Root mapping - serve index.html
     */
    @GetMapping("/")
    public ResponseEntity<String> index() {
        return serveIndexHtml();
    }

    /**
     * Catch-all for Angular routes - serve index.html
     * This allows Angular routing to work properly
     * Matches any path that doesn't start with api, assets, or index
     */
    @GetMapping("/{x:(?!api|assets|index).*}")
    public ResponseEntity<String> forwardToIndex(@PathVariable String x) {
        return serveIndexHtml();
    }

    /**
     * Helper method to read and serve index.html from classpath
     */
    private ResponseEntity<String> serveIndexHtml() {
        try {
            ClassPathResource resource = new ClassPathResource("static/index.html");
            if (!resource.exists()) {
                System.err.println("ERROR: index.html not found in classpath!");
                return ResponseEntity.notFound().build();
            }
            
            byte[] fileContent = resource.getInputStream().readAllBytes();
            String content = new String(fileContent);
            
            return ResponseEntity.ok()
                    .contentType(MediaType.TEXT_HTML)
                    .body(content);
        } catch (Exception e) {
            System.err.println("ERROR reading index.html: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.notFound().build();
        }
    }
}
