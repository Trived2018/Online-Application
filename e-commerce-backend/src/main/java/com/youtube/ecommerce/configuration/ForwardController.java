package com.youtube.ecommerce.configuration;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ForwardController {

    @GetMapping(value = {
            "/admin",
            "/admin/**",
            "/user",
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
        return "forward:/index.html";
    }
}
