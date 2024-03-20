import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";


@Component({
  selector: 'app-forgot-password-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.css',
})
export class ForgotPasswordFormComponent {
  constructor(private router:Router) {
  }
  verify(){
    this.router.navigate(["/verify"])
  }

}
