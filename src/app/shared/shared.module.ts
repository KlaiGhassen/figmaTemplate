import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ]
  ,
  exports: [
    HeaderComponent,
    FooterComponent,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule { }
