import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import 'rxjs/add/operator/map';
import { UserPreferencesService } from '../login/userPreferences.service';


@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
})
export class HomeViewComponent implements OnInit {
  users;
  userLoggedFlag: any;
   productJson: any;
  

  constructor(private http: Http,private router: Router, private _userPreferencesService: UserPreferencesService) {
    this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json()).subscribe(res => this.users = res)
    //var isUserLoggedIn:any = true; 
    var isUserLoggedIn:any; 
    //alert (isUserLoggedIn);

  }

       // Slider Images
  slides = [{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}];

 

  ngOnInit(): void{
    //alert('entering home on init');
    this.userLoggedFlag = true; // comment this and remove below line
    //this.userLoggedFlag = this._userPreferencesService.isUserLoggedIn;

     this.productJson = this._userPreferencesService.product;
    console.log(this.productJson)

    if(this.userLoggedFlag == "" || this.userLoggedFlag == undefined){
       //this.router.navigate(['./lo']); // remove comment
    }
  }

   get colour(): string {
        return this._userPreferencesService.colourPreference;
    }
    
}
