package com.youtube.ecommerce.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Root Controller - Serves Angular frontend index.html
 * This enables SPA (Single Page Application) routing
 */
@Controller
public class RootController {

    /**
     * Root mapping - serve index.html
     */
    @GetMapping("/")
    public String index() {
        return "forward:/index.html";
    }

    /**
     * Catch-all for Angular routes - forward to index.html
     * This allows Angular routing to work properly
     */
    @GetMapping("/{x:(?!api|assets|index).*}")
    public String forwardToIndex(@PathVariable String x) {
        return "forward:/index.html";
    }
}
