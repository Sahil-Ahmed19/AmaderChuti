import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ViewArticleComponent } from './view-article/view-article.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { EditBlogComponent } from './home/edit-blog/edit-blog.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'article', component: ViewArticleComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'edit', component: EditBlogComponent},
];
