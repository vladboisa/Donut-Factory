import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
//component's
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes = [{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent}];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes)
  ],
  exports : []
})
export class AuthModule { }
