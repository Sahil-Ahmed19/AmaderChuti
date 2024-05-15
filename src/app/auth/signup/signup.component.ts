import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MainService } from '../../service/main.service';

@Component({
  selector: 'amader-chuti-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  router = inject(Router);
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  ser_main = inject(MainService);


  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  errorMessage: string | null = null;

  onSubmit(): void {
    const rawForm = this.form.getRawValue()
    this.authService.register(rawForm.email, rawForm.username, rawForm.password).subscribe({
      next: () => {
        this.ser_main.openSnackBar('Registration Successful', 'right', 'top', 5000,);
        this.router.navigate(['/login']);
    },
    error: (err) => {
      this.errorMessage = err.code;
      this.ser_main.popupMsg('error','Oops...',this.errorMessage);
    }
  })

  }

}
