import { Component, OnInit, inject} from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AuthService } from './auth/service/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  authService = inject(AuthService)

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if(user) {
        this.authService.currenUserSignal.set({
          email: user.email!,
          username: user.displayName!,
        })
      }else{
        this.authService.currenUserSignal.set(null);
      }
      console.log(this.authService.currenUserSignal())
    })
  }

  
}
