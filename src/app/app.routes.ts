import { Routes } from '@angular/router';

import { ConnectionPage } from './Widget/connection-page/connection-page';
import { Dashboard } from './AdminSpace/dashboard/dashboard';
import { NavBar } from './Widget/nav-bar/nav-bar';
import { GestProduit } from './AdminSpace/gest-produit/gest-produit';
import { GestEmploye } from './AdminSpace/gest-employe/gest-employe';
import { GestFournissuer } from './AdminSpace/gest-fournissuer/gest-fournissuer';

export const routes: Routes = [
  { path: '', component: ConnectionPage },
  { path: 'dashboard', component: Dashboard },
  { path: 'navbar', component: NavBar },
  { path: 'gest-produit', component: GestProduit },
  { path: 'gest-employe', component: GestEmploye },
  { path: 'gest-fournissuer', component: GestFournissuer },
];
