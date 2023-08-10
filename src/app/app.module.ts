import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {  NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiPrefixInterceptor, CoreModule, ErrorHandlerInterceptor } from './core';
import { TokenInterceptor } from './core/services/http/token.interceptor';
import { SharedModule } from './shared/shared.module';
import { ShellModule } from './shell/shell.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThirdPartyLibraryConfig } from './core/utils/third-party-libraries-config';
import { PagesModule } from './modules/pages/pages.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(ThirdPartyLibraryConfig.toastrConfig),
    PagesModule,
    AppRoutingModule,
    NgxSpinnerModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
