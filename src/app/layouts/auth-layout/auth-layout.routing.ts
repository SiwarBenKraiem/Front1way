import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { ResetPasswordComponent } from 'src/app/pages/reset-password/reset-password.component';
import { ChangePasswordComponent } from 'src/app/pages/change-password/change-password.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'reset',       component: ResetPasswordComponent },
    { path: 'change',  component: ChangePasswordComponent}

];
