import { Component, inject} from '@angular/core';

import 'swiper/swiper-bundle.css';
import { EditorsChoiceComponent } from './editors-choice/editors-choice.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { Router } from '@angular/router';
// import Swiper bundle with all modules installed



@Component({
  selector: 'amader-chuti-home',
  standalone: true,
  imports: [EditorsChoiceComponent, ArticleCardComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent{

  router = inject(Router);

  gotoApp() {
    this.router.navigate(['']);
  }

}
