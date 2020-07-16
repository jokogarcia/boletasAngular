import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { UIService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  private loadingSubscription:Subscription;
  isLoading=false;

  constructor(
        private authService:AuthService,
        private uiService:UIService
    ) { }
  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadingSubscription = this.uiService.loadingSateChanged.subscribe(
      isLoading=>this.isLoading=isLoading
    );
  }
  
  onSubmit(form:NgForm){
    this.authService.registerUser({
      email:form.value.emailInput,
      password:form.value.password
    });
  }

}
