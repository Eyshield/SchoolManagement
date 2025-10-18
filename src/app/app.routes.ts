import { Routes } from '@angular/router';

import { ConnectionPage } from './Widget/connection-page/connection-page';
import { Dashboard } from './AdminSpace/dashboard/dashboard';
import { NavBar } from './Widget/nav-bar/nav-bar';
import { GestProduit } from './AdminSpace/gest-produit/gest-produit';
import { GestEmploye } from './AdminSpace/gest-employe/gest-employe';
import { GestFournissuer } from './AdminSpace/gest-fournissuer/gest-fournissuer';
import { AddEmploye } from './Add/add-employe/add-employe';
import { AddFournisseur } from './Add/add-fournisseur/add-fournisseur';
import { AddProduit } from './Add/add-produit/add-produit';
import { EditEmploye } from './Edit/edit-employe/edit-employe';
import { EditFournisseur } from './Edit/edit-fournisseur/edit-fournisseur';
import { EditProduit } from './Edit/edit-produit/edit-produit';

export const routes: Routes = [
  { path: '', component: ConnectionPage },
  { path: 'login', component: ConnectionPage },
  { path: 'dashboard', component: Dashboard },
  { path: 'navbar', component: NavBar },
  { path: 'gest-produit', component: GestProduit },
  { path: 'gest-employe', component: GestEmploye },
  { path: 'gest-fournissuer', component: GestFournissuer },
  { path: 'Add-employe', component: AddEmploye },
  { path: 'edit-employe/:id', component: EditEmploye },
  { path: 'Add-fournisseur', component: AddFournisseur },
  { path: 'edit-fournisseur/:id', component: EditFournisseur },
  { path: 'Add-produit', component: AddProduit },
  { path: 'edit-produit/:id', component: EditProduit },
];
