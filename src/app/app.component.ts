import { Component, ViewChild,  OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription, Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromRoot from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'boletasAngular';
  isAuth$: Observable<boolean>;
  constructor(private store:Store<fromRoot.State>, private authService:AuthService){}

  ngOnInit(){
    this.isAuth$=this.store.select(fromRoot.getIsAuth);
    this.authService.initAuthListener();
  }
  logout(){
   this.authService.logout();
  }
  
  
}
