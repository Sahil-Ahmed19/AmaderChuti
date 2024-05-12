import { AfterViewInit, Component} from '@angular/core';

// import Swiper and modules styles
import Swiper from 'swiper';
import {Navigation, Pagination } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
// import Swiper bundle with all modules installed



@Component({
  selector: 'amader-chuti-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit{

  ngAfterViewInit() {
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

}
