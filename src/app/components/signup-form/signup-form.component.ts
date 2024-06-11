import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators,} from "@angular/forms";
import {AuthServiceService} from "../../service/auth-service.service";
import {UserInterface} from "../../interface/user-interface";
import {Router} from "@angular/router";
import {SpinnerComponent} from "../spinner/spinner.component";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule, SpinnerComponent, ],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css',
})
export class SignupFormComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  isLoading = false;
  signUpForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    agreement: ['', [Validators.required]],
  });

  submitForm() {
    const userDetails = { ...this.signUpForm.value };
    delete userDetails.agreement;


    this.isLoading = true;
    this.toaster.success('Welcom', 'loginsuccesuflly')
    this.authService.registerUser(userDetails as UserInterface).subscribe(
      (response) => {
        console.log(response);

        setTimeout(() => {
          this.router.navigate(['login']);
          this.isLoading = false;
        }, 3000);

        console.log('User  created succesfully');
      },
      (error) => {
        console.error('Error creating user');
        // this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      },
    );
  }
}
