import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'amader-chuti-navbar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
