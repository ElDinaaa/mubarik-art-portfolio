package com.dinael.mubiwebsite.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dinael.mubiwebsite.model.ContactForm;
import com.dinael.mubiwebsite.repository.ContactFormRepository;

@Service
public class ContactFormService {
    // Аннотация @Autowired автоматически внедряет экземпляр ContactFormRepository в этот сервис
    @Autowired
    private ContactFormRepository contactFormRepository;

    // Аннотация @Autowired автоматически внедряет экземпляр EmailService в этот сервис
    @Autowired
    private EmailService emailService;

    // Метод для сохранения данных формы обратной связи
    public void saveContactForm(ContactForm contactForm) {
        // Сохраняем объект ContactForm в базе данных
        contactFormRepository.save(contactForm);

        // Определяем параметры для отправки email
        String to = "dina.tarantino@gmail.com";
        String subject = "New contact form submission";
        String body = "Name: " + contactForm.getName() + "\n" + 
                      "Email: " + contactForm.getEmail() + "\n" +
                      "Message: " + contactForm.getMessage();

        // Отправляем email с помощью emailService              
        emailService.sendSimpleMessage(to, subject, body);              
    }
}
