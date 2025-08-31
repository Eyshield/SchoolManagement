package dz.school.Managing.repository;

import dz.school.Managing.entity.Fournisseur;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FournisseurRepo extends JpaRepository<Fournisseur,Long> {
    Page<Fournisseur> findAllFournisseur(Pageable pageable);
}
