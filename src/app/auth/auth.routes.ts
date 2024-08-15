import { Routes } from '@angular/router';
//component's
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes:Routes = [{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent}];

