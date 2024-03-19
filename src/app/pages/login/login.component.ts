import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {LoginFormComponent} from "../../components/login-form/login-form.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, LoginFormComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
