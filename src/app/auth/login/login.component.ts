import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UIService } from 'src/app/shared/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading=false;
  private loadingSubscription:Subscription;
  constructor(
    private authService:AuthService,
    private uiService:UIService

    ) { }

  ngOnInit(): void {
    this.loadingSubscription = this.uiService.loadingSateChanged.subscribe(
      isLoading=>this.isLoading=isLoading
    );
  }

  onSubmit(form:NgForm){
    this.authService.login({
      email:form.value.emailInput,
      password:form.value.password
    });
  }
  ngOnDestroy():void{
    this.loadingSubscription.unsubscribe();
  }


}
