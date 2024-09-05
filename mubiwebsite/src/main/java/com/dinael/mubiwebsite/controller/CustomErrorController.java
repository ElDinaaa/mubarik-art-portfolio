package com.dinael.mubiwebsite.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpServletRequest;;

@Controller
public class CustomErrorController implements ErrorController {

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request) {
        // Получение кода ошибки
        Object status = request.getAttribute("jakarta.servlet.error.status_code");

        if (status != null) {
            Integer statusCode = Integer.valueOf(status.toString());

            // Проверка, если ошибка 404
            if (statusCode == 404) {
                return "en/404";  // возвращает страницу 404.html из папки templates
            }
        }

        return "en/error";  // возвращает общую страницу ошибки error.html
    }
}
