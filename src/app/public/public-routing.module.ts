import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public.component';

const routes: Routes = [
  { path: '',component: PublicComponent, children:
    [
      { path: '', redirectTo: 'ip-tracker', pathMatch: 'full'},
      { path: 'home', redirectTo: 'ip-tracker', pathMatch: 'full'},
      { path: 'ip-tracker', loadChildren: () => import('./ip-address-tracker/ip-address-tracker.module').then( m => m.IpAddressTrackerModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
