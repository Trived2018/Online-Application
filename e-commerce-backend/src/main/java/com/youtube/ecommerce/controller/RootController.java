package com.youtube.ecommerce.controller;

import java.io.IOException;
import java.io.InputStream;

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
        try {
            ClassPathResource resource = new ClassPathResource("static/index.html");
            InputStream inputStream = resource.getInputStream();
            String content = new String(inputStream.readAllBytes());
            inputStream.close();
            return ResponseEntity.ok()
                    .contentType(MediaType.TEXT_HTML)
                    .body(content);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Catch-all for Angular routes - serve index.html
     * This allows Angular routing to work properly
     * Matches any path that doesn't start with api, assets, or index
     */
    @GetMapping("/{x:(?!api|assets|index).*}")
    public ResponseEntity<String> forwardToIndex(@PathVariable String x) {
        try {
            ClassPathResource resource = new ClassPathResource("static/index.html");
            InputStream inputStream = resource.getInputStream();
            String content = new String(inputStream.readAllBytes());
            inputStream.close();
            return ResponseEntity.ok()
                    .contentType(MediaType.TEXT_HTML)
                    .body(content);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.notFound().build();
        }
    }
}
