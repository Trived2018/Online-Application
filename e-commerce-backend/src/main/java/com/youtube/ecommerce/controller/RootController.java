package com.youtube.ecommerce.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Root Controller - Handles SPA routing
 * Forwards non-API requests to index.html for Angular routing
 */
@Controller
public class RootController {

    /**
     * Catch-all for client-side routing
     * Returns index.html for all non-API, non-static routes
     * This allows Angular routing to work properly
     */
    @GetMapping(value = { "/{x:[\\w\\-]+}",
                          "/{x:^(?!api|assets|actuator).*$}/**" })
    public String forwardToAngular() {
        return "forward:/index.html";
    }
}
