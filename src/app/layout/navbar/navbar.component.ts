import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'amader-chuti-navbar',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  router = inject(Router);

}
