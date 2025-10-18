package dz.school.Managing.repository;

import dz.school.Managing.entity.Produit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProduitRepo extends JpaRepository<Produit,Long> {
    Page<Produit> findAll(Pageable pageable);
    Page<Produit>findByLibelleContainingIgnoreCase(String libelle,Pageable pageable);
}
