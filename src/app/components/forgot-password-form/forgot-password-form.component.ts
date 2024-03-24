import {Component, Input} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {SpinnerComponent} from "../spinner/spinner.component";


@Component({
  selector: 'app-forgot-password-form',
  standalone: true,
  imports: [RouterLink, SpinnerComponent],
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.css',
})
export class ForgotPasswordFormComponent {
  @Input() isLoading = false
  constructor(private router: Router) {}
  verify() {
    this.router.navigate(['/verify']);
  }
}
