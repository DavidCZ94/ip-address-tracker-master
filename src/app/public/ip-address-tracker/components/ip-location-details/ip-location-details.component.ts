import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IpLocationService } from '../../shared/ip-location.service';
import { LocalIpService } from '../../shared/local-ip.service';

@Component({
  selector: 'app-ip-location-details',
  templateUrl: './ip-location-details.component.html',
  styleUrls: ['./ip-location-details.component.scss']
})
export class IpLocationDetailsComponent implements OnInit {

  actualIp$: Observable<String>;
  ipIps$: Observable<String>;
  timezone$: Observable<String>;
  location$: Observable<String>;

  actualIp: string = '';
  initialIp: string = '';
  location:string = '';
  timezone:string = '';
  isp:string = '';

  constructor(private localIpService: LocalIpService, private ipLocationService: IpLocationService) { 
    this.getLocalIp();
    this.actualIp$ = this.ipLocationService.actualIp$;
    this.ipIps$ = this.ipLocationService.ipIps$;
    this.timezone$ = this.ipLocationService.timezone$;
    this.location$ = this.ipLocationService.location$;
  }

  ngOnInit(): void {
  }

  getLocalIp():void{
    this.localIpService.getLocalIp().subscribe(
      response => {
        this.initialIp = response.ip,
        this.getIpLocation(this.initialIp)
      },
      error => console.log(error)
    );
  }

  getIpLocation(ip:string) {
    this.ipLocationService.geIpLocation(ip).subscribe(
      response => {
        this.actualIp = response.ip;
        this.isp = response.isp;
        this.timezone = `UTC ${response.location.timezone}`;
        this.location = `${response.location.country}, ${response.location.region}, ${response.location.city}, ${response.location.postalCode}`
      },
      error => console.log(error)
    );
  }

}
