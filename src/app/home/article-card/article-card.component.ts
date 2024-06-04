import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { MainService } from '../../service/main.service';
import { Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'amader-chuti-article-card',
  standalone: true,
  imports: [NgxSpinnerModule, CommonModule],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent implements OnInit{

  data: any = [];
  sortedData: any = [];
  mainSer = inject(MainService);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef);
  spinner = inject(NgxSpinnerService)

  ngOnInit(): void {
    this.spinner.show();
    this.mainSer.getCollectionData('articles').subscribe((data) => {
      this.data = data;
      this.data = this.data.filter((item: { status: number; }) => item.status === 2);
      // console.log(this.data);
      this.sortedData = this.data.sort((a:any, b:any) => parseInt(b.postTime) - parseInt(a.postTime)).slice(0, 4);
      // console.log(this.sortedData, 'sorted');
      // console.log(this.data, 'unsorted');
      this.cdr.detectChanges(); // Trigger change detection
      this.spinner.hide();
    });
  }

  openArticlePage(data: any){
    const articleData = data; // Data to pass
    this.router.navigate(['/article'], { queryParams: { data: JSON.stringify(articleData), isHomePage : true } });
  }

  openAllArticles(){
    this.router.navigate(['/all-articles']);
  }

}
