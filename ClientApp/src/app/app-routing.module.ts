import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './Entites/user/user.component';

import { LayoutComponent } from './Layout/layout/layout.component';
import { LoginComponent } from './Entites/user/login/login.component';
import { RegisterComponent } from './Entites/user/register/register.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { AuthGuardAdminService } from './Services/auth-guard-admin.service';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AdminComponent } from './Entites/user/admin/admin.component';
import { AuthGuardUserService } from './Services/auth-guard-user.service';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent, canActivate: [AuthGuardService],
    data: { title: 'Home' },
    children: [
      {
        path: 'user/:action', component: UserComponent, canActivate: [AuthGuardUserService],
        data: {
          title: 'user'
        }
      },
      {
        path: 'admin/:action', component: UserComponent, canActivate: [AuthGuardAdminService],
        data : { title: 'admin' }
      },
     
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'pagenotfound', component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'pagenotfound',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
