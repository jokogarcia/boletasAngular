import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UIService } from 'src/app/shared/ui.service';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading$: Observable<boolean>;
  private loadingSubscription:Subscription;
  constructor(
    private authService:AuthService,
    private uiService:UIService,
    private store:Store<{ui:fromRoot.State}>

    ) { }

  ngOnInit(): void {
    this.isLoading$  = this.store.select(fromRoot.getIsLoading);
   
  }

  onSubmit(form:NgForm){
    this.authService.login({
      email:form.value.emailInput,
      password:form.value.password
    });
  }
  


}
