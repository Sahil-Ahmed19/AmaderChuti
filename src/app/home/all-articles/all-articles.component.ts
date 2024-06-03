import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { MainService } from '../../service/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'amader-chuti-all-articles',
  standalone: true,
  imports: [NgxSpinnerModule, CommonModule],
  templateUrl: './all-articles.component.html',
  styleUrl: './all-articles.component.scss'
})
export class AllArticlesComponent {

  data: any = [];
  mainSer = inject(MainService);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef);
  spinner = inject(NgxSpinnerService)

  ngOnInit(): void {
    this.spinner.show();
    this.mainSer.getCollectionData('articles').subscribe((data) => {
      this.data = data;
      this.data = this.data.filter((item: { status: number; }) => item.status === 2);
      console.log(this.data);
      // console.log(this.data, 'unsorted');
      this.cdr.detectChanges(); // Trigger change detection
      this.spinner.hide();
    });
  }

  openArticlePage(data: any){
    const articleData = data; // Data to pass
    this.router.navigate(['/article'], { queryParams: { data: JSON.stringify(articleData), isHomePage : true } });
  }
}
