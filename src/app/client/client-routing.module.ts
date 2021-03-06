import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageHomeProjectComponent} from './page-home-project/page-home-project.component'
import {ApresHomePageComponent} from './apres-home-page/apres-home-page.component'
import {DashboardClientComponent} from './dashboard-client/dashboard-client.component'
import { HomeClientComponent } from './home-client/home-client.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: 'home',
    component: ApresHomePageComponent
  },

{    path: 'profile',
component:   ProfileComponent

},{

  path: 'loginadmin',
  component: LoginComponent
},

  {
    path: 'projet',
    component: PageHomeProjectComponent
  },
  {
    path: 'dashboard',
    component: DashboardClientComponent
  },
  {path:'messages',
  component: MessagerieComponent

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
