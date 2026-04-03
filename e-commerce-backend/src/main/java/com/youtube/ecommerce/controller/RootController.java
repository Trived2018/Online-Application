package com.youtube.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Root Controller - Serves Angular frontend at root
 */
@RestController
@RequestMapping("/")
public class RootController {

    @Autowired
    private ResourceLoader resourceLoader;

    @GetMapping("")
    public ResponseEntity<byte[]> root() throws Exception {
        return serveIndexHtml();
    }

    @GetMapping("index.html")
    public ResponseEntity<byte[]> indexHtml() throws Exception {
        return serveIndexHtml();
    }

    private ResponseEntity<byte[]> serveIndexHtml() throws Exception {
        var resource = resourceLoader.getResource("classpath:static/index.html");
        if (!resource.exists()) {
            System.out.println("ERROR: index.html not found!");
            return ResponseEntity.notFound().build();
        }
        byte[] content = resource.getInputStream().readAllBytes();
        return ResponseEntity.ok()
                .contentType(MediaType.TEXT_HTML)
                .cacheControl(org.springframework.http.CacheControl.noCache())
                .body(content);
    }
}
