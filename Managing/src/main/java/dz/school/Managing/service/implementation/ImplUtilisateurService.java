package dz.school.Managing.service.implementation;

import dz.school.Managing.entity.Utilisateur;
import dz.school.Managing.repository.UtilisateurRepo;
import dz.school.Managing.service.interfaces.UtilisateurService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor

public class ImplUtilisateurService implements UtilisateurService {
    private UtilisateurRepo utilisateurRepo;
    private PasswordEncoder passwordEncoder;
    @Override
    public Utilisateur AddUtilisateur(Utilisateur utilisateur) {
        utilisateur.setPassword(passwordEncoder.encode(utilisateur.getPassword()));
        return utilisateurRepo.save(utilisateur);
    }

    @Override
    public Utilisateur GetUtilisateur(Long id) {
        return utilisateurRepo.findById(id).orElseThrow(()-> new RuntimeException("Utilisateur introuvable"));
    }

    @Override
    public Utilisateur UpdateUtilisateur(Long id, Utilisateur utilisateur) {
        Utilisateur existingUser = utilisateurRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Utilisateur introuvable"));
        existingUser.setNom(utilisateur.getNom());
        existingUser.setPrenom(utilisateur.getPrenom());
        existingUser.setEmail(utilisateur.getEmail());
        existingUser.setDateNaissance(utilisateur.getDateNaissance());
        existingUser.setAdresse(utilisateur.getAdresse());
        existingUser.setRole(utilisateur.getRole());

        String nouveauMotDePasse = utilisateur.getPassword();

        if (nouveauMotDePasse != null && !nouveauMotDePasse.isEmpty()) {
            if (!passwordEncoder.matches(nouveauMotDePasse, existingUser.getPassword())) {
                existingUser.setPassword(passwordEncoder.encode(nouveauMotDePasse));
            }
        }

        return utilisateurRepo.save(existingUser);
    }

    @Override
    public String DeleteUtilisateur(Long id) {
        try {
            GetUtilisateur(id);
            utilisateurRepo.deleteById(id);
            return "L operation a ete effectue avec succes";

        }catch (Exception e){
            return e.getMessage();
        }

    }

    @Override
    public Page<Utilisateur> FindAllUtilisateur(Pageable pageable) {
        return utilisateurRepo.findAll(pageable);
    }

    @Override
    public Page<Utilisateur> SearchUtilisateur(String nom, Pageable pageable) {
        return utilisateurRepo.findByNomContainingIgnoreCase(nom,pageable);
    }
}
