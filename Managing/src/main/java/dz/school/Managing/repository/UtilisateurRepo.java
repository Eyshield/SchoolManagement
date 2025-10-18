package dz.school.Managing.repository;

import dz.school.Managing.entity.Utilisateur;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UtilisateurRepo extends JpaRepository<Utilisateur,Long> {
    Optional<Utilisateur> findByEmail(String email);
    Page<Utilisateur>findByNomContainingIgnoreCase(String nom,Pageable pageable);
}
