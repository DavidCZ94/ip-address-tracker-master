import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IpLocationService } from '../../shared/ip-location.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.scss']
})
export class LocationMapComponent implements OnInit, AfterViewInit {
  private map: any;

  actualIp$: Observable<String>;
  ipIps$: Observable<String>;
  timezone$: Observable<String>;
  location$: Observable<String>;
  cordinates$: Observable<any>;

  constructor(private ipLocationService: IpLocationService) {
    this.actualIp$ = this.ipLocationService.actualIp$;
    this.ipIps$ = this.ipLocationService.ipIps$;
    this.timezone$ = this.ipLocationService.timezone$;
    this.location$ = this.ipLocationService.location$;
    this.cordinates$ = this.ipLocationService.cordinates$;
  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.initMap(4.60971, -74.08175);
    this.listenForCoordinates();
  }

   private initMap(lat: number, lng: number): void {
    this.map = L.map('map', {
      center: [ lat | 4.60971, lng | -74.08175],
      zoom: 9
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  listenForCoordinates(){
    this.cordinates$.subscribe(
      cordinates => {
        this.map.remove();
        this.initMap(cordinates[0], cordinates[1]);
      }
    );
  }

}
