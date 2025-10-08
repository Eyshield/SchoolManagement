package dz.school.Managing.controller;

import dz.school.Managing.DTO.PageResponse;
import dz.school.Managing.entity.Produit;
import dz.school.Managing.service.interfaces.ProduitService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/produit")
@AllArgsConstructor
public class ProduitController {
    private ProduitService produitService;
    @PostMapping
    public ResponseEntity<Produit> creerProduit(@RequestBody Produit produit){
        Produit produit1 = produitService.AddProduit(produit);
        try {
            return new ResponseEntity<>(produit1, HttpStatus.CREATED);

        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);

        }

    }

    @PutMapping("/{id}")
    public ResponseEntity<Produit>mettreAjourProduit(@PathVariable Long id,@RequestBody Produit produit){
        Produit produit1=produitService.UpdateProduit(id,produit);
        try {
       return  new ResponseEntity<>(produit1,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> supprimerProduit(@PathVariable Long id){
        String op = produitService.DeleteProduit(id);
        try {
            if (op.equals("L operation effectue avec succes")){
            return new ResponseEntity<>(op,HttpStatus.OK);}
            else {
                return new ResponseEntity<>(op,HttpStatus.NOT_FOUND);
            }
        }catch (Exception e){}

        return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produit> obetenirProduitParId(@PathVariable Long id){
        Produit produit=produitService.GetProduit(id);
        try {
            return new ResponseEntity<>(produit,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);

        }

    }

    @GetMapping
    public ResponseEntity<PageResponse<Produit>> obetenirToutLesProduits(Pageable pageable){
        Page<Produit> produits = produitService.FindAllProduit(pageable);
        PageResponse<Produit>response=new PageResponse<>(
                produits.getContent(),
                produits.getNumber(),
                produits.getSize(),
                produits.getTotalElements(),
                produits.getTotalPages(),
                produits.isFirst(),
                produits.isLast()
        );
        try {
            return new ResponseEntity<>(response,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }





}
