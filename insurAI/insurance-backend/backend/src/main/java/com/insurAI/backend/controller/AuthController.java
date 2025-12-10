package com.insurAI.backend.controller;

import com.insurAI.backend.entity.User;
import com.insurAI.backend.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")   // <-- yahan change
public class AuthController {

    private final UserRepository userRepo;

    public AuthController(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {

        if (userRepo.existsByEmail(user.getEmail())) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Email already registered");
        }

        User saved = userRepo.save(user);
        return ResponseEntity.ok(saved);
    }

    public static class LoginRequest {
        public String email;
        public String password;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {

        return userRepo.findByEmail(req.email)
                .map(user -> {
                    if (!user.getPassword().equals(req.password)) {
                        return ResponseEntity
                                .status(HttpStatus.BAD_REQUEST)
                                .body("Invalid email or password");
                    }
                    return ResponseEntity.ok(user);
                })
                .orElseGet(() ->
                        ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                .body("Invalid email or password")
                );
    }
}
