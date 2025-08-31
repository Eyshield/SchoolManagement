package dz.school.Managing.service.interfaces;

import dz.school.Managing.entity.Fournisseur;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface FournisseurService {
    Fournisseur AddFourinisseur(Fournisseur fournisseur);
    Fournisseur GetFournisseur(Long id);
    String DeleteFournisseur(Long id);

    Fournisseur UpdateFournisseur(Long id , Fournisseur fournisseur);
    Page<Fournisseur> FindAllFournisseur(Pageable pageable);
}
