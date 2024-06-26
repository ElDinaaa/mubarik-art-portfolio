package com.dinael.mubiwebsite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dinael.mubiwebsite.model.ContactForm;
import com.dinael.mubiwebsite.service.ContactFormService;

@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private ContactFormService contactFormService;

     @PostMapping
    public ResponseEntity<?> submitForm(@RequestBody ContactForm contactForm) {
        try {
            contactFormService.saveContactForm(contactForm);
            return ResponseEntity.ok(new ApiResponse(true, "Form submitted successfully!"));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new ApiResponse(false, "There was an error submitting your form."));
        }
    }

    public static class ApiResponse {
        private boolean success;
        private String message;

        public ApiResponse(boolean success, String message) {
            this.success = success;
            this.message = message;
        }

        public boolean isSuccess() {
            return success;
        }

        public void setSuccess(boolean success) {
            this.success = success;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }
}
