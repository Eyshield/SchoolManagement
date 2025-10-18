import { Produit } from './Produit.models';

export interface Fournisseur {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  adresse: string;
  dateNaissance: Date;
  produits?: Produit[];
}
