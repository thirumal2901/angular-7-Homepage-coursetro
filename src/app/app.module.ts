import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginViewComponent } from './views/login/login.component';
import { HomeViewComponent } from './views/home/home.component';
import { NavMenuComponent } from './views/nav-menu/nav-menu.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'

const ROUTES: Route[] = [
  { path: '', component: LoginViewComponent},
  { path: 'home', component: HomeViewComponent},
   { path: 'lo', component: LoginViewComponent},
]

@NgModule({
  declarations: [ AppComponent, LoginViewComponent, HomeViewComponent,  NavMenuComponent],
  
  imports: [ 
    AppRoutingModule, 
    BrowserModule, FormsModule, BrowserAnimationsModule, HttpModule,MatCardModule, MatButtonModule, MatGridListModule,  RouterModule.forRoot(ROUTES) 
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }




/*
Material import reference

https://www.tutorialspoint.com/angular_material7/angular_material7_card.htm*/