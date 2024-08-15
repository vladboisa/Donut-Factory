import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: 'donuts',
    loadComponent: () =>
      import('../admin/containers/donut-list/donut-list.component').then(
        (x) => x.DonutListComponent
      ),
  },
  {
    path: 'donuts/new',
    loadComponent: () =>
      import('../admin/containers/donut-single/donut-single.component').then(
        (x) => x.DonutSingleComponent
      ),
    data: { isEditable: false },
  },
  {
    path: 'donuts/:id',
    loadComponent: () =>
      import('../admin/containers/donut-single/donut-single.component').then(
        (x) => x.DonutSingleComponent
      ),
    data: { isEditable: true },
  },
  { path: '', redirectTo: 'donuts', pathMatch: 'full' },
];
