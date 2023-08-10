import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { CredentialsService } from '../authentication/credentials.service';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { ApiUrls } from '../../utils/api-urls';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToasterMessageService } from 'src/app/core/services/toaster-message/toaster-message.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  loginUrl: boolean | undefined;
  fileUploadUrl: boolean;
  headers: { [name: string]: string | string[] } | undefined;
  constructor(
    private router: Router,
    private location: Location,
    private credentialsService: CredentialsService,
    public messageService: ToasterMessageService,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const currentUser = this.credentialsService.credentials;
    const isLoggedIn = currentUser && currentUser.access_token ? true : false;
    
    this.getHeaders(isLoggedIn);
    request = request.clone({
      setHeaders: this.headers,
    });
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            return event.body;
          }
        },
        (err: any) => {
          let errorMessage: string;
          if (err instanceof HttpErrorResponse) {
            switch (err.status) {
              case 400:
                errorMessage = '400 Bad request';
                return err;

              case 401:
                errorMessage = 'Unauthorized';
                this.messageService.showErrorToaster(errorMessage);
                setTimeout(() => {
                  this.location.replaceState('/');
                  window.location.replace('/login');
                  localStorage.clear();
                  sessionStorage.clear();
                  this.router.navigate(['login']);
                }, 3000);
                break;
              case 403:
                errorMessage = '403 Forbidden';
                break;
              case 404:
                errorMessage = '404 Not found';
                break;
              case 405:
                errorMessage = '405 Method Not Allowed';
                break;
              case 406:
                errorMessage = '406 Not Acceptable';
                break;
              case 408:
                errorMessage = '408 Request Timeout';
                break;
              case 413:
                errorMessage = '413 Request Entity Too Large';
                break;
              case 422:
                errorMessage = '422 Error';
                break;
              case 423:
                errorMessage = '423 Error';
                break;
              case 429:
                errorMessage = '429 Too Many Requests';
                break;
              case 500:
                errorMessage = '500 Internal server error';
                break;
              case 501:
                errorMessage = '501 Not Implemented';
                break;
              case 502:
                errorMessage = '502 Bad Gateway';
                break;
              case 503:
                errorMessage = '503 Service unavailable';
                break;
              case 504:
                errorMessage = '504 Gateway Timeout';
                break;
              default:
                errorMessage =
                  'Unable to process your request. Please contact the site administrator ' +
                  'if the problem persists';
                break;
            }
          }
          return err;
        },
        () => {}
      )
    );
  }

  public resetUrlCred() {
    this.loginUrl = false;
    this.fileUploadUrl = false;
  }

  public getHeaders( isLoggedIn: any) {
    if(!isLoggedIn){
      this.headers = {
        'Content-Type': 'application/json',
      };
    }
    else{
      var user= this.credentialsService.credentials
      var access_token =user.access_token
      this.headers = {
        'Authorization':`Bearer ${access_token}`
      }
    }
  }
}
