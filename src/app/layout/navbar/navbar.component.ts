import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'amader-chuti-navbar',
  standalone: true,
  imports: [MaterialModule, RouterOutlet, UserDetailsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  router = inject(Router);
  authService = inject(AuthService);

}
