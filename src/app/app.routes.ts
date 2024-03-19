import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {ForgotPasswordComponent} from "./pages/forgot-password/forgot-password.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: ""
  },
  {
    path: "login",
    component: LoginComponent,
    title: "login"
  },
  {
    path: "signup",
    component: SignUpComponent,
    title: "signup"
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
    title: "forgot-password"
  }
];
