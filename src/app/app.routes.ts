import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { DonutService } from './admin/services/donut.service';

export const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((x) => x.adminRoutes),
    providers: [importProvidersFrom(HttpClientModule), DonutService],
  },
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {path: '', loadChildren: () => import ('./auth/auth.routes').then(x=>x.authRoutes) },
  { path: '**', redirectTo: 'admin' },
];
