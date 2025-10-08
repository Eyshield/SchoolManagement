package dz.school.Managing.controller;

import dz.school.Managing.DTO.PageResponse;
import dz.school.Managing.entity.Utilisateur;
import dz.school.Managing.service.interfaces.UtilisateurService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/utilisateur")
@AllArgsConstructor
public class UtilisateurController {
    private UtilisateurService utilisateurService;
    @PostMapping
    public ResponseEntity<Utilisateur> creerUtilisateur( @RequestBody Utilisateur utilisateur) {
        try {
            Utilisateur nouveauUtilisateur = utilisateurService.AddUtilisateur(utilisateur);
            return new ResponseEntity<>(nouveauUtilisateur, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    // Récupérer tous les utilisateurs avec pagination
    @GetMapping
    public ResponseEntity<PageResponse<Utilisateur>> obtenirTousUtilisateurs(Pageable pageable) {
        try {
            Page<Utilisateur> utilisateurs = utilisateurService.FindAllUtilisateur(pageable);
            PageResponse<Utilisateur> response = new PageResponse<>(
                    utilisateurs.getContent(),
                    utilisateurs.getNumber(),
                    utilisateurs.getSize(),
                    utilisateurs.getTotalElements(),
                    utilisateurs.getTotalPages(),
                    utilisateurs.isFirst(),
                    utilisateurs.isLast()
            );
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Récupérer un utilisateur par ID
    @GetMapping("/{id}")
    public ResponseEntity<Utilisateur> obtenirUtilisateurParId(@PathVariable Long id) {
        try {
            Utilisateur utilisateur = utilisateurService.GetUtilisateur(id);
            if (utilisateur != null) {
                return new ResponseEntity<>(utilisateur, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Mettre à jour un utilisateur
    @PutMapping("/{id}")
    public ResponseEntity<Utilisateur> mettreAJourUtilisateur(
            @PathVariable Long id,
             @RequestBody Utilisateur utilisateur) {
        try {
            Utilisateur utilisateurMisAJour = utilisateurService.UpdateUtilisateur(id, utilisateur);
            if (utilisateurMisAJour != null) {
                return new ResponseEntity<>(utilisateurMisAJour, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    // Supprimer un utilisateur
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimerUtilisateur(@PathVariable Long id) {
        try {
            String supprime = utilisateurService.DeleteUtilisateur(id);
            if (supprime.equals("L operation a ete effectue avec succes")) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }








}
