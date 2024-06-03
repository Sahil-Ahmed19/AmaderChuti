import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { MaterialModule } from '../material/material.module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'amader-chuti-view-article',
  standalone: true,
  imports: [NgxSpinnerModule, MaterialModule, ReactiveFormsModule ],
  templateUrl: './view-article.component.html',
  styleUrl: './view-article.component.scss'
})
export class ViewArticleComponent implements OnInit {

  @ViewChild('vc_editors_choice') vc_editors_choice!: ElementRef;
  vld_editors_choice = new FormControl()

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
        console.log(this.data);
      }
      this.spinner.hide();
    });
  }

  submit(value: number){
    console.log(this.vld_editors_choice.value);
  }

}
