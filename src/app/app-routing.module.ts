import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import {LoginComponent} from "./login/login.component";
import { NewsComponent } from './news/news.component';
import { FaqComponent } from './faq/faq.component';

import {SignupComponent} from "./signup/signup.component";


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'store',
    component: StoreComponent,
  },
  { path: 'login', 
    component: LoginComponent
  },
  {
    path:'signup', 
    component:SignupComponent
  },
  { 
    path: 'news', component: NewsComponent 
  },
  {
     path: 'faq', component: FaqComponent
     },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

