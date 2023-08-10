import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable, Subject } from 'rxjs';
import { ApiUrls } from '../../utils/api-urls';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public headerNameSubject = new Subject<any>();
  public headerNameObservable = this.headerNameSubject.asObservable();
  constructor(private http: HttpService) {}


  // saveFbToken(params: any): Observable<any> {
  //   const postConfigure = ApiUrls.FIREBASE.saveToken;
  //   return this.http.post(postConfigure, params);
  // }
}

