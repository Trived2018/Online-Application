package com.youtube.ecommerce.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Root Controller - Serves Angular frontend index.html
 * This enables SPA (Single Page Application) routing
 */
@Controller
@RequestMapping("/")
public class RootController {

    /**
     * Serve index.html for root and all non-API routes (SPA)
     * This allows Angular routing to work properly
     */
    @GetMapping({"", "/{path:^(?!api|assets|index).*$}", "/**/{path:^(?!api).*$}"})
    public String index() {
        return "forward:/index.html";
    }
}
