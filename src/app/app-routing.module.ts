import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{path: 'admin',
loadChildren: ()=> import('./admin/admin.module').then(x=>x.AdminModule)},
{path: '', redirectTo: 'admin', pathMatch: 'full'},
{path: '**', redirectTo: 'admin'}];

@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
