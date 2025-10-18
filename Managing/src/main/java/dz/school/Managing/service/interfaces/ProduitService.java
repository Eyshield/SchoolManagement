package dz.school.Managing.service.interfaces;

import dz.school.Managing.entity.Produit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProduitService {
    Produit AddProduit(Produit produit);
    Produit UpdateProduit(Long id , Produit produit);
    Produit GetProduit(Long id);
    String DeleteProduit(Long id);
    Page<Produit> FindAllProduit(Pageable pageable);
    List<Produit>FindAllListProduit();

    Page<Produit>SearchProduit(Pageable pageable, String libelle);

}
