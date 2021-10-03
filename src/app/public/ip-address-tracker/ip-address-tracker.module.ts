import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpAddressTrackerRoutingModule } from './ip-address-tracker-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './containers/home/home.component';
import { LocationMapComponent } from './components/location-map/location-map.component';
import { IpFormComponent } from './components/ip-form/ip-form.component';
import { IpLocationDetailsComponent } from './components/ip-location-details/ip-location-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LocationMapComponent,
    IpFormComponent,
    IpLocationDetailsComponent
  ],
  imports: [
    CommonModule,
    IpAddressTrackerRoutingModule
  ]
})
export class IpAddressTrackerModule { }
