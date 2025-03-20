package com.TermProject.finema.controller;

import com.TermProject.finema.entity.User;
import com.TermProject.finema.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        User registeredUser = userService.registerUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
    }

    @GetMapping("/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        User user = userService.getUserByUsername(username).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(user);
    }

    @GetMapping("/profile")
    public ResponseEntity<User> getUserByToken(@RequestBody String token) {
        System.out.println("It was called...");
        User user = userService.getUserByToken(token).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(user);
    }

    @GetMapping("/logout")
    public ResponseEntity<User> updateUserToken(@RequestBody String token) {
        User user = userService.getUserByToken(token).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        user.setToken(null);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/{username}")
    public ResponseEntity<User> updateUser(@PathVariable String username, @RequestBody User user) {
        User existingUser = userService.getUserByUsername(username).orElse(null);
        if (existingUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        existingUser.setName(user.getName());
        existingUser.setPhone(user.getPhone());
        existingUser.setPassword(user.getPassword());
        existingUser.setHomeAddress(user.getHomeAddress());
        existingUser.setCardNumber(user.getCardNumber());
        existingUser.setExpirationDate(user.getExpirationDate());
        existingUser.setBillingAddress(user.getBillingAddress());
        existingUser.setAdmin(user.isAdmin());
        User updatedUser = userService.updateUser(existingUser);
        return ResponseEntity.ok(updatedUser);
    }
}