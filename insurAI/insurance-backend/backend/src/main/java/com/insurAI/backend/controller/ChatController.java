package com.insurAI.backend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import java.util.*;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "*")
public class ChatController {

    @Value("${SPRING_OPENAI_API_KEY}")
    private String apiKey;

    @PostMapping
    public Map<String, String> chat(@RequestBody Map<String, String> body) {

        String userMessage = body.get("message");

        RestTemplate rest = new RestTemplate();

        String url = "https://api.openai.com/v1/chat/completions";

        Map<String, Object> req = new HashMap<>();
        req.put("model", "gpt-4o-mini");
        req.put("messages", List.of(
                Map.of("role", "user", "content", userMessage)
        ));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(req, headers);

        ResponseEntity<Map> response = rest.exchange(
                url,
                HttpMethod.POST,
                entity,
                Map.class
        );

        String reply = ((Map)((List)response.getBody().get("choices"))
                .get(0))
                .get("message")
                .toString();

        return Map.of("reply", reply);
    }
}
