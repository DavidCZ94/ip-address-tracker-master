import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable()
export class LocalIpService {

  localIpApiUrl = environment.localIpApiUrl;

  constructor(private http: HttpClient) { }

  getLocalIp(): Observable<any>{
    return this.http.get<{ip: string}>(this.localIpApiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: Response){
    console.log(error);
    const msg = 'Error status code' + error.status + 'status' + error.status;
    return throwError(msg);
  }

}
