import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { LocationData } from './location-data.model';

@Injectable({
  providedIn: 'root'
})
export class IpLocationService {

  
  private actualIp = new BehaviorSubject('');
  actualIp$ = this.actualIp.asObservable();
  
  private ipIps = new BehaviorSubject('');
  ipIps$ = this.ipIps.asObservable();
  
  private timezone = new BehaviorSubject('');
  timezone$ = this.timezone.asObservable();

  private location = new BehaviorSubject('');
  location$ = this.location.asObservable();

  private cordinates = new BehaviorSubject<any>([]);
  cordinates$ = this.cordinates.asObservable();
  

  ipifyGeolocationApi = environment.ipifyGeolocationApi;
  ipifyApiKey = environment.ipifyApiKey;

  constructor(private http: HttpClient) { }

  geIpLocation(ip: string) :Observable<any>{
    return this.http.get<LocationData>(`${this.ipifyGeolocationApi}?apiKey=${this.ipifyApiKey}&ipAddress=${ip}`).pipe(
      tap(
        response => {
          this.cordinates.next([response.location.lat, response.location.lng]);
          this.actualIp.next(response.ip);
          this.ipIps.next(response.isp);
          this.timezone.next(`UTC ${response.location.timezone}`);
          this.location.next(`${response.location.country}, ${response.location.region}, ${response.location.city}, ${response.location.postalCode}`);
        }
      ),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response){
    console.log(error);
    const msg = 'Error status code' + error.status + 'status' + error.status;
    return throwError(msg);
  }


}
