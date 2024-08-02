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
import { LoginComponent } from '../auth/login/login.component';

const routes:Routes = [{path: 'donuts', component: DonutListComponent},
{path:'donuts/new', component: DonutSingleComponent, data: {isEditable:false}},
{path: 'donuts/:id', component: DonutSingleComponent, data: {isEditable:true}},
{path: '', redirectTo: 'donuts', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    DonutListComponent,
    DonutCardComponent,
    DonutSingleComponent,
    DonutFormComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,FormsModule, RouterModule.forChild(routes)
  ],
  exports: [DonutListComponent, DonutSingleComponent]
})
export class AdminModule { }
