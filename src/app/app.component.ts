import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'boletasAngular';
  isAuth = false;
  authSubscription:Subscription;
  constructor(private authService:AuthService){}
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
  ngOnInit(){
    this.authSubscription = this.authService.authChange.subscribe(authStatus=>{
      this.isAuth=authStatus;
    });
    this.authService.initAuthListener();
  }
  logout(){
    this.authService.logout();
  }
  
  
}
