import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IpLocationService } from '../../shared/ip-location.service';

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.scss']
})
export class LocationMapComponent implements OnInit {

  actualIp$: Observable<String>;
  ipIps$: Observable<String>;
  timezone$: Observable<String>;
  location$: Observable<String>;

  constructor(private ipLocationService: IpLocationService) {
    this.actualIp$ = this.ipLocationService.actualIp$;
    this.ipIps$ = this.ipLocationService.ipIps$;
    this.timezone$ = this.ipLocationService.timezone$;
    this.location$ = this.ipLocationService.location$;
  }

  ngOnInit(): void {
  }

}
