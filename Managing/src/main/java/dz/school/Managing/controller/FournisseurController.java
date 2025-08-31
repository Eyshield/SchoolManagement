package dz.school.Managing.controller;


import dz.school.Managing.entity.Fournisseur;
import dz.school.Managing.service.interfaces.FournisseurService;
import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/fournisseur")
@AllArgsConstructor
public class FournisseurController {
    private FournisseurService fournisseurService;
    @PostMapping
    public ResponseEntity<Fournisseur> creerFournisseur(@RequestBody Fournisseur fournisseur){
        Fournisseur fournisseur1 = fournisseurService.AddFourinisseur(fournisseur);
        try {
            return new ResponseEntity<>(fournisseur1, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);}
    }
    @GetMapping("/{id}")
    public ResponseEntity<Fournisseur> obtenirFournisseurParId(@PathVariable Long id){
        Fournisseur fournisseur = fournisseurService.GetFournisseur(id);
        try {
            return new ResponseEntity<>(fournisseur,HttpStatus.OK);

        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);

        }

    }
    @GetMapping
    public ResponseEntity<Page<Fournisseur>> ObetenirToutLesFournisseur(Pageable pageable){
        Page<Fournisseur> fournisseurs = fournisseurService.FindAllFournisseur(pageable);
        try {
            return new ResponseEntity<>(fournisseurs,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity<Fournisseur> mettreAjourFournisseur(@PathVariable Long id, @RequestBody Fournisseur fournisseur){
        Fournisseur fournisseur1 = fournisseurService.UpdateFournisseur(id,fournisseur);
        try {
            return new ResponseEntity<>(fournisseur1,HttpStatus.ACCEPTED);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
        }}


    @DeleteMapping("/{id}")
    public ResponseEntity<String> supprimerFournissuer(@PathVariable Long id){
    String op = fournisseurService.DeleteFournisseur(id);
    try {if (op.equals("L operation a ete effectue avec succes")){
        return new ResponseEntity<>(op,HttpStatus.OK);}
        else {
            return new ResponseEntity<>(op,HttpStatus.INTERNAL_SERVER_ERROR);
    }

        }catch (Exception e){
        return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
    }

    }









}
