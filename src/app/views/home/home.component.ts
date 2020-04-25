import { Component } from '@angular/core';
import { Http } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
})
export class HomeViewComponent {
  users;

  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json()).subscribe(res => this.users = res)
  }
}
