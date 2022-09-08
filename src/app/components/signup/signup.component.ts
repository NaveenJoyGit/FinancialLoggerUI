import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpFormResponse } from 'src/app/models/model';
import { UserAuthService } from 'src/app/service/user-auth.service';
import { ConfirmValidParentMatcher, CustomValidatorService } from 'src/app/validators/custom-validator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  confirmValidParentMatcher = new ConfirmValidParentMatcher();
  signUpForm!: FormGroup
  signUpResponse!: SignUpFormResponse

  constructor(private formBuilder: FormBuilder, 
    private customValidator: CustomValidatorService,
    private userAuthService: UserAuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: [''],
      lastName: [''],
      passwordForm: this.formBuilder.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      },
      {validator: this.customValidator.passwordValidator2()})
    })
  }

  // get tradeDescription() {
  //   return this.signUpForm.controls['username'].value;
  // }

  get username() {
    return this.signUpForm.controls['username'].value;
  }

  get firstName() {
    return this.signUpForm.controls['firstName'].value;
  }

  get lastName() {
    return this.signUpForm.controls['lastName'].value;
  }

  get password() {
    return this.signUpForm.get('passwordForm');
  }

  signUp() {
    console.log("Is password valid?? " +  this.password?.valid)
    console.log(this.password);
    let logger = this.password && this.password.errors ? this.password.errors['mismatch'] : "FAIL" 
    console.log(logger);
    this.sendResponse();
  }

  sendResponse() {
    this.signUpResponse = {
      userName: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password?.get('password')?.value
    }
    
    console.log(this.signUpResponse);
    this.userAuthService.registerUser(this.signUpResponse).subscribe({
      next: data => this.reroute(data),
      error: err => console.log(err)
    })
  }

  reroute(data: any) {
    console.log(data);
    console.log('REGISTER SUCESS')
    this.router.navigateByUrl('/login')
  }

}
