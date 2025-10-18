package dz.school.Managing.DTO;

import dz.school.Managing.entity.Fournisseur;
import lombok.Data;

import java.util.List;

@Data
public class FournisseurDto {
    private Fournisseur fournisseur;
    private List<Long> produitIds;
}
