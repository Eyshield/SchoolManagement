package dz.school.Managing.service.implementation;

import dz.school.Managing.entity.Produit;
import dz.school.Managing.repository.ProduitRepo;
import dz.school.Managing.service.interfaces.ProduitService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ImplProduitService implements ProduitService {
    private ProduitRepo produitRepo;
    @Override
    public Produit AddProduit(Produit produit) {
        return produitRepo.save(produit);
    }

    @Override
    public Produit UpdateProduit(Long id, Produit produit) {
        produit.setId(id);
        return produitRepo.save(produit);
    }

    @Override
    public Produit GetProduit(Long id) {
        return produitRepo.findById(id).orElseThrow(()-> new RuntimeException("Le produit n existe pas"));
    }

    @Override
    public String DeleteProduit(Long id) {
        try {
            GetProduit(id);
            produitRepo.deleteById(id);
            return "L operation effectue avec succes";
        }catch (Exception e){
        return e.getMessage();
    }}

    @Override
    public Page<Produit> FindAllProduit(Pageable pageable) {
        return produitRepo.findAll(pageable);
    }
}
