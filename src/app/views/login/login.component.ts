import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { UserPreferencesService } from './userPreferences.service';

@Component({
  selector: 'login',
  templateUrl:'login.component.html'
})

export class LoginViewComponent {

  // Create a private variable to hold an instance of the UserPreferencesService
    private _userPreferencesService: UserPreferencesService;

   constructor(private router: Router){
      this._userPreferencesService = new UserPreferencesService();
      //alert(this._userPreferencesService.colourPreference)
    }

  // Implement a getter to retrieve the colourPreference value
    // from the service
    get colour(): string {
        return this._userPreferencesService.colourPreference;
    }

    // Implement a setter to change the colourPreference value
    // of the service
    set colour(value: string) {
        this._userPreferencesService.colourPreference = value;
    }
    
    //public username: string;
    onSubmit() {
      if(this.username == "thiru" && this.passCred == "123" ){
        //isUserLoggedIn: boolean = true;
        this.router.navigate(['./home']);
      }else if(this.username == ""){
        alert("Username shouldn't empty");
      }else if(this.passCred == ""){
        alert("Password shouldn't empty");
      }else {
        alert("Either given username and password is wrong");
      }
    }
}

