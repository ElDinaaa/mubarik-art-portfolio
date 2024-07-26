package com.dinael.mubiwebsite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class PageController {
    
   @GetMapping("/{lang}/index")
    public String index(@PathVariable String lang){
        return lang + "/index";
    }

    @GetMapping("/{lang}/work")
    public String work(@PathVariable String lang) {
        return lang + "/work"; 
    }

    @GetMapping("/{lang}/about")
    public String about(@PathVariable String lang) {
        return lang + "/about"; 
    }

    @GetMapping("/{lang}/contact")
    public String contact(@PathVariable String lang) {
        return lang + "/contact"; 
    }
}
