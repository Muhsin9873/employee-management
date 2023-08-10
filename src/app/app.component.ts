import { Component, OnInit, OnDestroy, ElementRef, Inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { merge, Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import {  Logger } from './core';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public googleApikey: any;
  public checkGoogleApiCallStatusSubscription: Subscription;
  public rolePermission: any;
  credentials: any;
  userDetails: any;

  constructor(
    private router: Router,
  ) {
    
  }

  ngOnInit() {


    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/') {
          this.router.navigateByUrl('/login');
        }
      }
    });
  }

  ngOnDestroy() {
  }
}
