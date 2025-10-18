package dz.school.Managing.service.interfaces;

import dz.school.Managing.entity.Utilisateur;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UtilisateurService {
    Utilisateur AddUtilisateur(Utilisateur utilisateur);
    Utilisateur GetUtilisateur(Long id);
    Utilisateur UpdateUtilisateur(Long id,Utilisateur utilisateur);
    String DeleteUtilisateur(Long id);
    Page<Utilisateur> FindAllUtilisateur(Pageable pageable);
    Page<Utilisateur>SearchUtilisateur(String nom,Pageable pageable);
}
