import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { DonutService } from './admin/services/donut.service';
import { FormsModule } from '@angular/forms';

export const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((x) => x.adminRoutes),
    providers: [DonutService, importProvidersFrom(FormsModule)],
  },
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {path: '', loadChildren: () => import ('./auth/auth.routes').then(x=>x.authRoutes) },
  { path: '**', redirectTo: 'admin' },
];
