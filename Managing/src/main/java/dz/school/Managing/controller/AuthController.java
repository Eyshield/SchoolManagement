package dz.school.Managing.controller;

import dz.school.Managing.entity.AuthResponse;
import dz.school.Managing.entity.Utilisateur;
import dz.school.Managing.service.implementation.AuthenticationServce;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {
    private AuthenticationServce authentificationService;
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> Register(@RequestBody Utilisateur user){
        AuthResponse authResponse = authentificationService.signUp(user);
        return ResponseEntity.ok(authResponse);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody Utilisateur user){
        AuthResponse authResponse = authentificationService.Login(user);
        return ResponseEntity.ok(authResponse);
    }
}
