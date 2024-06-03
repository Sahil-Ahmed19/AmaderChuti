import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'amader-chuti-view-article',
  standalone: true,
  imports: [NgxSpinnerModule, MaterialModule],
  templateUrl: './view-article.component.html',
  styleUrl: './view-article.component.scss'
})
export class ViewArticleComponent implements OnInit {

  data: any;

  constructor(
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) 
    {}

  ngOnInit() {
    this.spinner.show();
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.data = JSON.parse(params['data']);
      }
      this.spinner.hide();
    });
  }

}
