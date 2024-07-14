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

    // Аннотация @Autowired автоматически внедряет экземпляр ContactFormService в этот контроллер
    @Autowired
    private ContactFormService contactFormService;

     @PostMapping
    public ResponseEntity<?> submitForm(@RequestBody ContactForm contactForm) {
        try {
            // Вызываем метод saveContactForm у contactFormService для сохранения данных формы
            contactFormService.saveContactForm(contactForm);
            // Если все прошло успешно, возвращаем ответ с HTTP статусом 200 (OK) и сообщением об успехе
            return ResponseEntity.ok(new ApiResponse(true, "Form submitted successfully!"));
        } catch (Exception e) {
            // Если произошла ошибка, возвращаем ответ с HTTP статусом 500 (Internal Server Error) и сообщением об ошибке
            return ResponseEntity.status(500).body(new ApiResponse(false, "There was an error submitting your form."));
        }
    }

    // Внутренний статический класс ApiResponse для формирования ответов API
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
