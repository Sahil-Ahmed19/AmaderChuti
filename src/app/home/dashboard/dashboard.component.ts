import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Router } from '@angular/router';
import { MainService } from '../../service/main.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'amader-chuti-dashboard',
  standalone: true,
  imports: [MaterialModule, NgxSpinnerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  data: any = [];
  router = inject(Router);
  mainSer = inject(MainService);
  authService = inject(AuthService);
  cdr = inject(ChangeDetectorRef);

  constructor(private spinner: NgxSpinnerService) { }
  
  ngOnInit(): void {
    this.spinner.show();
    this.mainSer.getCollectionData('articles').subscribe((data) => {
      this.data = data;
      console.log(data);
      this.cdr.detectChanges(); // Trigger change detection
      this.spinner.hide();
    });
  }

  openArticlePage(data: any){
    const articleData = data; // Data to pass
    this.router.navigate(['/article'], { queryParams: { data: JSON.stringify(articleData) } });
  }


}
