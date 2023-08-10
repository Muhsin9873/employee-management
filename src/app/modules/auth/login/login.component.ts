import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Logger } from 'src/app/core/logger.service';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
const log = new Logger('Login');
import { NgxSpinnerService } from 'ngx-spinner';
import { ToasterMessageService } from 'src/app/core/services/toaster-message/toaster-message.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  phone: any;
  error: string | undefined;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private spinner: NgxSpinnerService,
    public messageService: ToasterMessageService,
    
    
  ) {
    this.createForm();
  }

  ngOnInit() {}

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  login() {
    this.spinner.show();
    this.error = '';
    const params = {
      password: this.loginForm.value.password,
      email: this.loginForm.value.email,
    };
    const login$ = this.authenticationService.login(params);
    login$
      .pipe(
        finalize(() => {
          this.loginForm.markAsPristine();
        })
      )
      .subscribe(
        (credentials: any) => {
          if(credentials && credentials.data){
            this.router.navigate(['home'])
            this.spinner.hide()

          }
          else{
            this.spinner.hide()
            this.messageService.showErrorToaster("Invalid Email Address or Password")
          }
        },
        (error) => {
          log.debug(`Login error: ${error}`);
          this.spinner.hide()

        }
      );
  }

}
