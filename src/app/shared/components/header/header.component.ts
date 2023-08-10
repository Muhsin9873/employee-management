import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CredentialsService } from 'src/app/core';
import { HeaderService } from 'src/app/core/services/header/header.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToasterMessageService } from 'src/app/core/services/toaster-message/toaster-message.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() activeItem: any;
  menu_name: any;
  public hedaerValueSubscription: Subscription;
  checkUpdates: Subscription;
  public currentMessage: any;
  constructor(
    public router: Router,
    public headerService: HeaderService,
    public credentialsService: CredentialsService,
    private spinner: NgxSpinnerService,
    public messageService: ToasterMessageService,
  ) {
    this.checkHeaderCartValue();
  }

  ngOnInit() {
  }
   //Logout functionality
  logout() {
    this.spinner.show();   
    setTimeout(() => {
      this.router.navigateByUrl('/login');
      this.credentialsService.setCredentials();
      this.spinner.hide();
    }, 1000)
  }

  public checkHeaderCartValue() {
    this.hedaerValueSubscription =
      this.headerService.headerNameObservable.subscribe((data) => {
        this.menu_name = data;
      });
  }


  ngOnDestroy() {
    this.hedaerValueSubscription ? this.hedaerValueSubscription.unsubscribe() : '';
    this.checkUpdates ? this.checkUpdates.unsubscribe() : '';
  }

  public navigateFunction(navigate_url:any){
    this.router.navigateByUrl('/' + navigate_url );
  }

  
}
