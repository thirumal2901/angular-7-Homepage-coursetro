import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './navmenu.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {
   constructor(private router: Router){
    }

    public onLoginOutClick(){
        this.router.navigate(['./lo']);
    }
}




/*doubt
 
1. delete navmenucomponent.html and get from nav-menu component.
  templateUrl: './navmenu.component.html'
  templateUrl: './nav-menu/nav-menu.component.html'  Not Working why?
  trying to load frm nav-menu component
*/



/** 
 * EXERCISE 1
 * Duration: 5/10 mins
 * 
 * Add a new route `/users` and display a text into the route component
 * 
 */

/** 
 * EXERCISE 2
 * Duration: 10/15 mins
 * 
 * Create a '<nav-bar>' component and move the menu there
 */