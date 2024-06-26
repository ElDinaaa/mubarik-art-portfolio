package com.dinael.mubiwebsite.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dinael.mubiwebsite.model.ContactForm;
import com.dinael.mubiwebsite.repository.ContactFormRepository;

@Service
public class ContactFormService {
    
    @Autowired
    private ContactFormRepository contactFormRepository;

    public void saveContactForm(ContactForm contactForm) {
        contactFormRepository.save(contactForm);
    }
}
