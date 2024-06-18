package com.dinael.mubiwebsite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {
    
    @GetMapping("/index")
    public String index(){
        return "index";
    }

    @GetMapping("/work")
    public String work() {
        return "work"; 
    }

    @GetMapping("/about")
    public String about() {
        return "about"; 
    }

    @GetMapping("/contact")
    public String contact() {
        return "contact"; 
    }
}
