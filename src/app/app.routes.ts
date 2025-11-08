import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'accounts',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'accountsApp',
        exposedModule: './HomeComponent'
      }).then(m => m.HomeComponent)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
