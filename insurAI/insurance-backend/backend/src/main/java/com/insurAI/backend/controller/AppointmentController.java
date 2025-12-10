package com.insurAI.backend.controller;

import com.insurAI.backend.entity.Appointment;
import com.insurAI.backend.repository.AppointmentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController {

    private final AppointmentRepository repo;

    public AppointmentController(AppointmentRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Appointment create(@RequestBody Appointment appointment) {
        return repo.save(appointment);
    }

    @GetMapping
    public List<Appointment> findAll() {
        return repo.findAll();
    }

    @GetMapping("/{email}")
    public List<Appointment> findByEmail(@PathVariable String email) {
        return repo.findByEmail(email);
    }
}
