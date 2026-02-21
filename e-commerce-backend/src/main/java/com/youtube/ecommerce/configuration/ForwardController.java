package com.youtube.ecommerce.configuration;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ForwardController {

    @GetMapping(value = {
            "/register",
            "/login"
    })
    public String forward() {
        return "forward:/index.html";
    }
}