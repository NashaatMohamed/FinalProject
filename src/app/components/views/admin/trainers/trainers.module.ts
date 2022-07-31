import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainersRoutingModule } from './trainers-routing.module';
import { TrainersComponent } from './trainers.component';


@NgModule({
  declarations: [
    TrainersComponent
  ],
  imports: [
    CommonModule,
    TrainersRoutingModule
  ]
})
export class TrainersModule { }
