// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    {
        path: 'dashboard',
        // Lazy-load your home component
        loadComponent: () =>
            import('./dashboard/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'accounts',
        // Lazy-load remote micro-frontend from accounts-app
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
