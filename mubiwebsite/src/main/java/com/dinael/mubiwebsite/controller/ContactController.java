package com.dinael.mubiwebsite.controller;

import javax.swing.Spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dinael.mubiwebsite.model.ContactForm;
import com.dinael.mubiwebsite.service.FileStorageService;

@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private FileStorageService fileStorageService;

    @PostMapping
    public String submitForm(@RequestBody ContactForm contactForm) {
        fileStorageService.saveContactForm(contactForm);
        return "Form submitted successfully!";
    }
    
}
