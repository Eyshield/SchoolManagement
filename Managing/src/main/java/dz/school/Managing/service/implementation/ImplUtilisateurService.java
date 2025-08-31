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

@Service
@AllArgsConstructor
@NoArgsConstructor
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
        utilisateur.setId(id);
        return utilisateurRepo.save(utilisateur) ;
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
}
