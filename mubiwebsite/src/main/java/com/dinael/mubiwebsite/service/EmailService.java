package com.dinael.mubiwebsite.service;

public interface EmailService {
    // Метод для отправки простого текстового сообщения по электронной почте
    void sendSimpleMessage(String to, String subject, String text);
    
}
