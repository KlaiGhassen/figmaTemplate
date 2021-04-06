import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AcceptComponent } from './accept/accept.component';
import { MainComponent } from './main/main.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [HomeAdminComponent, AcceptComponent, MainComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule
  ],

})
export class AdminModule { }
