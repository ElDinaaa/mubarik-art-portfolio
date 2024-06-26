// package com.dinael.mubiwebsite.service;

// import java.io.FileWriter;
// import java.io.PrintWriter;

// import org.springframework.stereotype.Service;

// import com.dinael.mubiwebsite.model.ContactForm;

// @Service
// public class FileStorageService {
    
//     private static final String FILE_PATH = "contact.txt";

//     public void saveContactForm(ContactForm contactForm) {
//         try (FileWriter fileWriter = new FileWriter(FILE_PATH, true);
//              PrintWriter printWriter = new PrintWriter(fileWriter)) {
//                 printWriter.println("Name: " + contactForm.getName());
//                 printWriter.println("Email: " + contactForm.getEmail());
//                 printWriter.println("Message: " + contactForm.getMessage());
//                 printWriter.println("----------------------------------");
//             } catch (Exception e) {
//                 e.printStackTrace();
//         }
//     }
// }
