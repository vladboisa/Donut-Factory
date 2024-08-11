
import { Routes } from '@angular/router';
//container's
import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './containers/donut-single/donut-single.component';

export const adminRoutes:Routes = [{path: 'donuts', component: DonutListComponent},
{path:'donuts/new', component: DonutSingleComponent, data: {isEditable:false}},
{path: 'donuts/:id', component: DonutSingleComponent, data: {isEditable:true}},
{path: '', redirectTo: 'donuts', pathMatch: 'full'}
];

