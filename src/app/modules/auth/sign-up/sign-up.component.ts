import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { finalize } from 'rxjs/operators';
import { ToasterMessageService } from 'src/app/core/services/toaster-message/toaster-message.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private authenticationService: AuthenticationService,
    public messageService: ToasterMessageService,
  ) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],
    });
  }

  register() {
    const params ={
      name:this.loginForm.value.name,
      email:this.loginForm.value.email,
      password:this.loginForm.value.password,
      confirmpassword:this.loginForm.value.confirmpassword
    }

    const register$ = this.authenticationService.register(params);
    register$
    .pipe(
      finalize(() => {
        this.loginForm.markAsPristine();
      })
    )
    .subscribe(
      (credentials: any) => {
        this.messageService.showSuccessToaster("New user successfully registered")
        if(credentials){
          this.router.navigate(['login'])
        }
      },
      (error) => {        
        this.messageService.showErrorToaster(error.error.message)
      }
    )
  }

}
