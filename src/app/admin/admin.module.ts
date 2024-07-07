import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
//container's
import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './containers/donut-single/donut-single.component';
//component's
import { DonutCardComponent } from './components/donut-card/donut-card.component';
import { DonutFormComponent } from './components/donut-form/donut-form.component';

const routes: Routes = [
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

@NgModule({
  declarations: [
    DonutListComponent,
    DonutCardComponent,
    DonutSingleComponent,
    DonutFormComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [DonutListComponent, DonutSingleComponent],
})
export class AdminModule {}
