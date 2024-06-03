import { Component, OnInit, inject, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../service/main.service';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
// import Swiper and modules styles
import Swiper from 'swiper';
import {Navigation, Pagination } from 'swiper/modules';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'amader-chuti-editors-choice',
  standalone: true,
  imports: [
    CommonModule,
    NgxSpinnerModule,
  ],
  templateUrl: './editors-choice.component.html',
  styleUrl: './editors-choice.component.scss'
})
export class EditorsChoiceComponent implements OnInit{

  data: any = [];
  mainSer = inject(MainService);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef);
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.mainSer.getCollectionData('articles').subscribe((data) => {
      this.data = data;
      this.cdr.detectChanges(); // Trigger change detection
      this.initializeSwiper();
      this.spinner.hide();
    });
  }

  initializeSwiper() {
    Swiper.use([Navigation, Pagination]);

    const swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      speed: 500,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
        sensitivity: 0.5,
        eventsTarget: '.blog-slider',
      },
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
    swiper.mousewheel.enable();
  }

  openArticlePage(data: any){
    const articleData = data; // Data to pass
    this.router.navigate(['/article'], { queryParams: { data: JSON.stringify(articleData), isHomePage : true } });
  }

}
