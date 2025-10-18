package dz.school.Managing.service.implementation;

import dz.school.Managing.entity.AuthResponse;
import dz.school.Managing.entity.Utilisateur;
import dz.school.Managing.enums.Role;
import dz.school.Managing.repository.UtilisateurRepo;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthenticationServce {
    private UtilisateurRepo utilisateurRepo;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthResponse signUp(Utilisateur request){
        Utilisateur user= new Utilisateur();
        user.setNom(request.getNom());
        user.setEmail(request.getEmail());
        user.setRole(request.getRole());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        String token= jwtService.generateToken(user);
        utilisateurRepo.save(user);
        return new AuthResponse(token,true, user.getNom(),user.getId(),user.getRole() );
    }
    public AuthResponse Login(Utilisateur request){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        Utilisateur user = utilisateurRepo.findByEmail(request.getEmail()).orElseThrow();
        String nom = user.getNom();
        Role role = user.getRole();
        String token= jwtService.generateToken(user);
        Boolean isAuth = true;
        Long id = user.getId();
        return new AuthResponse(token,isAuth,nom,id,role);
    }
}
