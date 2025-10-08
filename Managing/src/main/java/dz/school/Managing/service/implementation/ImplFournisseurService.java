package dz.school.Managing.service.implementation;

import dz.school.Managing.entity.Fournisseur;
import dz.school.Managing.repository.FournisseurRepo;
import dz.school.Managing.service.interfaces.FournisseurService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ImplFournisseurService implements FournisseurService {
    private FournisseurRepo fournisseurRepo;
    @Override
    public Fournisseur AddFourinisseur(Fournisseur fournisseur) {
        return fournisseurRepo.save(fournisseur);
    }

    @Override
    public Fournisseur GetFournisseur(Long id) {
        return fournisseurRepo.findById(id).orElseThrow(()->new RuntimeException("Le fournisseur n existe pas"));
    }

    @Override
    public String DeleteFournisseur(Long id) {
        try {
            GetFournisseur(id);
            fournisseurRepo.deleteById(id);
            return "L operation a ete effectue avec succes";
        }catch (Exception e){
            return e.getMessage();

        }
    }

    @Override
    public Fournisseur UpdateFournisseur(Long id, Fournisseur fournisseur) {
         fournisseur.setId(id);
         return fournisseurRepo.save(fournisseur);
    }

    @Override
    public Page<Fournisseur> FindAllFournisseur(Pageable pageable) {
        return fournisseurRepo.findAll(pageable);
    }
}
