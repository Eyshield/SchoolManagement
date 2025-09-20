export interface EmployePage<Employe> {
  content: Employe[];
  totalElements: number;
  totalPages: number;
  size: number; // taille de la page (pageSize)
  number: number; // numéro de la page courante
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}
