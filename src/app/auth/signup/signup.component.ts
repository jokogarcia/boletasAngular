import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription, Observable } from 'rxjs';
import { UIService } from 'src/app/shared/ui.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoading$:Observable<boolean>;

  constructor(
        private authService:AuthService,
        private uiService:UIService,
        private store:Store<{ui:fromRoot.State}>
    ) { }


  ngOnInit(): void {
    this.isLoading$  = this.store.select(fromRoot.getIsLoading);
  }
  
  onSubmit(form:NgForm){
    this.authService.registerUser({
      email:form.value.emailInput,
      password:form.value.password
    });
  }

}
