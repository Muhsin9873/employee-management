import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { Credentials, CredentialsService } from './credentials.service';
import { ApiUrls } from '../../utils/api-urls';
import { map } from 'rxjs/operators';
import { HttpService } from '../http/http.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ToasterMessageService } from '../toaster-message/toaster-message.service';
import { LocalStorageService } from '../local-storage.service';

export interface LoginContext {
  email: string;
  password: string;
}

export interface RegisterContext {
  name:string,
  email: string;
  password: string;
  confirmpassword:string
}

/**
 * Provides a base for authentication workflow.
 * The login method should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: LoginContext | undefined  ;
  registerData: RegisterContext | undefined
  
  constructor(private credentialsService: CredentialsService, private http: HttpService) {}

  login(context: LoginContext): Observable<Credentials> {
    
    const apiUrl = ApiUrls.AUTH_SERVICE.login;
    return this.http.post(apiUrl, context).pipe(
      map((basicUserInfo: any) => {        
        this.credentialsService.setCredentials(basicUserInfo.data);
        return basicUserInfo;        
      })
    );
  }

  register(context: RegisterContext): Observable<Credentials> {

    const apiUrl = ApiUrls.AUTH_SERVICE.register;
    return this.http.post(apiUrl,context).pipe(
      map((basicUserInfo: any) => {
        return basicUserInfo
      })
    )

  }
 }
