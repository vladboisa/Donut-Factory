import { Routes } from '@angular/router';

export const appRoutes: Routes = [{path: 'admin',
loadChildren: ()=> import('./admin/admin.module').then(x=>x.AdminModule)},
{path: '', redirectTo: 'admin', pathMatch: 'full'},
{path: '**', redirectTo: 'admin'}];

