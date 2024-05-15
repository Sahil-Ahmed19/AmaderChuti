import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MainService } from '../../service/main.service';

@Component({
  selector: 'amader-chuti-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  router = inject(Router);
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  ser_main = inject(MainService);

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  errorMessage: string | null = null;

  onSubmit(): void {
    const rawForm = this.form.getRawValue()
    this.authService.login(rawForm.email, rawForm.password).subscribe({
      next: () => {
        this.ser_main.openSnackBar('Login Successful', 'right', 'top', 5000,);
        this.router.navigate(['/']);
    },
    error: (err) => {
      this.errorMessage = err.code;
      this.ser_main.popupMsg('error','Oops...',this.errorMessage);
    }
  })

  }


}
