import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../core/shared/shared.module';
import { HomeComponent } from './home/containers/home/home.component';
import { PublicComponent } from './public.component';


@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ],
  declarations: [
    PublicComponent,
    HomeComponent
  ],
  exports: [],
  providers: []
})
export class PublicModule { }
