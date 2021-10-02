import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    NotFoundComponent
  ]
})
export class SharedModule { }
