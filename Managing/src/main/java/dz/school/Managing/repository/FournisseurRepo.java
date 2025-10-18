package dz.school.Managing.repository;

import dz.school.Managing.entity.Fournisseur;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FournisseurRepo extends JpaRepository<Fournisseur,Long> {
    Page<Fournisseur> findAll(Pageable pageable);
   Page<Fournisseur> findByNomContainingIgnoreCase(Pageable pageable, String nom);
}
