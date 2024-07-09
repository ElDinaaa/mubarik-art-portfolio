package com.dinael.mubiwebsite.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dinael.mubiwebsite.model.ContactForm;
import com.dinael.mubiwebsite.repository.ContactFormRepository;

@Service
public class ContactFormService {
    
    @Autowired
    private ContactFormRepository contactFormRepository;

    @Autowired
    private EmailService emailService;

    public void saveContactForm(ContactForm contactForm) {
        contactFormRepository.save(contactForm);

        String to = "dina.tarantino@gmail.com";
        String subject = "New contact form submission";
        String body = "Name: " + contactForm.getName() + "\n" + 
                      "Email: " + contactForm.getEmail() + "\n" +
                      "Message: " + contactForm.getMessage();

        emailService.sendSimpleMessage(to, subject, body);              
    }
}
