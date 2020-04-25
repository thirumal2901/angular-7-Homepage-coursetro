import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginViewComponent } from './views/login/login.component';
import { HomeViewComponent } from './views/home/home.component';
import { NavMenuComponent } from './views/nav-menu/nav-menu.component';

const ROUTES: Route[] = [
  { path: '', component: LoginViewComponent},
  { path: 'home', component: HomeViewComponent},
   { path: 'lo', component: LoginViewComponent},
]

@NgModule({
  declarations: [ AppComponent, LoginViewComponent, HomeViewComponent,  NavMenuComponent],
  
  imports: [ 
    AppRoutingModule, 
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(ROUTES) 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
