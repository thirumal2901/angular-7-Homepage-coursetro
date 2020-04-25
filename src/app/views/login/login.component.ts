import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl:'login.component.html'
})
export class LoginViewComponent {

   constructor(private router: Router){
    }

    /*public onLoginClick(){
        alert(loginCred);
        this.router.navigate(['./home']);
    }*/

    public username: string;
    onSubmit() {
      if(this.username == "thiru" && this.passCred == "123" ){
        isUserLoggedIn: boolean = true;
        this.router.navigate(['./home']);
      }else {
        alert("Either given username and password is wrong");
      }
    }
}
