import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {LoginFormComponent} from "../../components/login-form/login-form.component";
import {RouterLink} from "@angular/router";
import {SignupFormComponent} from "../../components/signup-form/signup-form.component";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    NavbarComponent,
    LoginFormComponent,
    RouterLink,
    SignupFormComponent,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {}
