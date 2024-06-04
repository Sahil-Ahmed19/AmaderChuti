import { Component, OnInit, inject} from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AuthService } from './auth/service/auth.service';
import { MainService } from './service/main.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  userEmail: string | null | undefined = undefined;
  
  authService = inject(AuthService)
  mainSer = inject(MainService)

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if(user) {
        this.userEmail = user.email;
        this.mainSer.getDocumentById('users', this.userEmail).subscribe((data) => {
          // console.log(data);
          // console.log(data.type);
          this.authService.currenUserSignal.set({
            email: user.email!,
            username: user.displayName!,
            type: data.type!,
            location: data.location!,
            mobile: data.mobile!
          })
          console.log(this.authService.currenUserSignal())
        })
      }else{
        this.authService.currenUserSignal.set(null);
      }
    })
  }

  
}
