import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../service/main.service';
// import Swiper and modules styles
import Swiper from 'swiper';
import {Navigation, Pagination } from 'swiper/modules';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'amader-chuti-editors-choice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editors-choice.component.html',
  styleUrl: './editors-choice.component.scss'
})
export class EditorsChoiceComponent implements OnInit{

  // mainSer = inject(MainService);
  // router = inject(Router);
  // data: any = [];

  // async ngOnInit(): Promise<void> {
  //   this.mainSer.getCollectionData('articles').subscribe((data) => {
  //     this.data = data;
  //     console.log(this.data);
  //   });

  //   await this.initializeSwiper();
  // }

  // initializeSwiper() {
  //   Swiper.use([Navigation, Pagination]);

  //   const swiper = new Swiper('.blog-slider', {
  //     spaceBetween: 30,
  //     speed: 500,
  //     effect: 'fade',
  //     loop: true,
  //     mousewheel: {
  //       invert: false,
  //       sensitivity: 0.5,
  //       eventsTarget: '.blog-slider',
  //     },
  //     pagination: {
  //       el: '.blog-slider__pagination',
  //       clickable: true,
  //     }
  //   });
  //   swiper.mousewheel.enable();
  // }

  data: any = [];
  mainSer = inject(MainService);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.mainSer.getCollectionData('articles').subscribe((data) => {
      this.data = data;
      this.cdr.detectChanges(); // Trigger change detection
      this.initializeSwiper();
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

  navigateToArticle(id: number) {
    this.router.navigate(['/article', id]);
  }

}
