import { Routes } from '@angular/router';

import { ConnectionPage } from './Widget/connection-page/connection-page';
import { Dashboard } from './AdminSpace/dashboard/dashboard';
import { NavBar } from './Widget/nav-bar/nav-bar';

export const routes: Routes = [
  { path: '', component: ConnectionPage },
  { path: 'dashboard', component: Dashboard },
  { path: 'navbar', component: NavBar },
];
