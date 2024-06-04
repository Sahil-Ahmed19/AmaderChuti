import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MainService } from '../../service/main.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'amader-chuti-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NgxSpinnerModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  router = inject(Router);
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  ser_main = inject(MainService);
  spinner = inject(NgxSpinnerService);


  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
    mobno: ['', Validators.required],
    location: ['', Validators.required],
  });

  errorMessage: string | null = null;

  onSubmit(): void {
    const rawForm = this.form.getRawValue();
    this.spinner.show();
    this.authService.register(rawForm.email, rawForm.username, rawForm.password).subscribe({
      next: () => {
        const userData = {
          email: rawForm.email,
          name: rawForm.username,
          mobile: rawForm.mobno,
          location: rawForm.location,
          type: "1"
        };
        const userDocId = rawForm.email;
        this.authService.addDocumentWithId('users', userDocId, userData).then(() => {
          this.ser_main.openSnackBar('Registration Successful', 'right', 'top', 5000);
          this.spinner.hide();
          this.router.navigate(['/login']);
        })
    },
    error: (err) => {
      this.errorMessage = err.code;
      this.spinner.hide();
      this.ser_main.popupMsg('error','Oops...',this.errorMessage);
    }
  })

  }

}
