package com.dinael.mubiwebsite.service;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.core.env.Environment;
import org.slf4j.Logger;

@Service
public class EmailServiceImpl implements EmailService {

    private static final Logger log = LoggerFactory.getLogger(EmailServiceImpl.class);

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private Environment env;

    @Override
    public void sendSimpleMessage(String to, String subject, String text) throws MailException {
        log.info(this.getClass().getName() + ".SendMail start!");

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(env.getProperty("spring.mail.username"));
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        
        try {
            javaMailSender.send(message);    
            log.info(this.getClass().getName() + ".SendMail End!");
        } catch (MailException e) {
            log.error("Failed to send email to " + to + ". Error: " + e.getMessage());
        } catch (Exception e) {
            log.error("Unexpected error occurred while sending email to " + to + ". Error: " + e.getMessage());
            // Обработка других ошибок, связанных с отправкой почты
        }
    }
    
}
