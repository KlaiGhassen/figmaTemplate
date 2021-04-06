import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeClientComponent } from './home-client/home-client.component';
import { SharedModule } from './shared/shared.module';
import { PageHomeProjectComponent } from './page-home-project/page-home-project.component';
import { ApresHomePageComponent } from './apres-home-page/apres-home-page.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { ProfileComponent } from './profile/profile.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { OnlyNavComponent } from './only-nav/only-nav.component';


@NgModule({
  declarations: [HomeClientComponent, PageHomeProjectComponent, ApresHomePageComponent, DashboardClientComponent, ProfileComponent, MessagerieComponent, OnlyNavComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [DatePipe],

  exports:[PageHomeProjectComponent]
})
export class ClientModule { }
