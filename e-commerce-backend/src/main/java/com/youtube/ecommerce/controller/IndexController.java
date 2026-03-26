package com.youtube.ecommerce.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    /**
     * Forward SPA routes to index.html for Angular routing to work
     * Handles all non-API routes without file extensions
     */
    @GetMapping(value = {
            "/",
            "/admin",
            "/admin/**",
            "/user",
            "/user/**",
            "/register",
            "/login",
            "/forbidden",
            "/addNewProduct",
            "/showProductDetails",
            "/orderInformation",
            "/productViewDetails",
            "/buyProduct",
            "/cart",
            "/orderConfirm",
            "/myOrders"
    })
    public String forward() {
        return "forward:/jwt-youtube-ui/index.html";
    }
}



