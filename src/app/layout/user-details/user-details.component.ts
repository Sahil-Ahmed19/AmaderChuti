import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'amader-chuti-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  authService = inject(AuthService);

}
