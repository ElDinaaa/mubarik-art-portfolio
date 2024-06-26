package com.dinael.mubiwebsite.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dinael.mubiwebsite.model.ContactForm;

public interface ContactFormRepository extends JpaRepository<ContactForm, Long> {

    
}
