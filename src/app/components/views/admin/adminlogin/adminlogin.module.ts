import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminloginRoutingModule } from './adminlogin-routing.module';
import { AdminloginComponent } from './adminlogin.component';

import {  ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AdminloginRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ]
})
export class AdminloginModule { }
