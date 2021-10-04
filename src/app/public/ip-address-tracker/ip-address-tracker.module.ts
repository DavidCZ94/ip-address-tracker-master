import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpAddressTrackerRoutingModule } from './ip-address-tracker-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './containers/home/home.component';
import { LocationMapComponent } from './components/location-map/location-map.component';
import { IpFormComponent } from './components/ip-form/ip-form.component';
import { IpLocationDetailsComponent } from './components/ip-location-details/ip-location-details.component';
import { LocalIpService } from './shared/local-ip.service';
import { IpLocationService } from './shared/ip-location.service';


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
    IpAddressTrackerRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LocalIpService,
    IpLocationService
  ]
})
export class IpAddressTrackerModule { }
