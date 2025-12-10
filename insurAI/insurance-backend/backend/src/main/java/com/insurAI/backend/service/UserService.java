package com.insurAI.backend.service;

import org.springframework.stereotype.Service;
import com.insurAI.backend.entity.User;
import com.insurAI.backend.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    // REGISTER
    public User register(User user) {
        // check if email exists
        if (repo.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already registered");
        }
        return repo.save(user);
    }

    // LOGIN
    public User login(String email, String password) {
        Optional<User> optionalUser = repo.findByEmail(email);

        User user = optionalUser.orElseThrow(
                () -> new RuntimeException("Invalid credentials")
        );

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid credentials");
        }

        return user;
    }

    // ALL USERS
    public List<User> getAllUsers() {
        return repo.findAll();
    }
}
