import { Component } from '@angular/core';
import {ForgotPasswordFormComponent} from "../../components/forgot-password-form/forgot-password-form.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {VerifyFormComponent} from "../../components/verify-form/verify-form.component";

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [ForgotPasswordFormComponent, NavbarComponent, VerifyFormComponent],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css',
})
export class VerifyComponent {}
