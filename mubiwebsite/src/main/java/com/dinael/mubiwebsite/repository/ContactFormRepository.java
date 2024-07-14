package com.dinael.mubiwebsite.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dinael.mubiwebsite.model.ContactForm;

// Объявляет интерфейс ContactFormRepository, который расширяет JpaRepository, который включает в себя базовые методы для выполнения CRUD операций
public interface ContactFormRepository extends JpaRepository<ContactForm, Long> {

    
}
