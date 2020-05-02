import { Component } from '@angular/core';
import { Http } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { UserPreferencesService } from '../login/userPreferences.service';


@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
})
export class HomeViewComponent {
  users;
  private _userPreferencesService: UserPreferencesService;

  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json()).subscribe(res => this.users = res)
    this._userPreferencesService = new UserPreferencesService();
    var isUserLoggedIn:any = true; 
    //alert(isUserLoggedIn);
  }

   get colour(): string {
        return this._userPreferencesService.colourPreference;
    }
    
}
