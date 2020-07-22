import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth'
import { BoletasService } from '../boletas/boletas.service';
import { UIService } from '../shared/ui.service';
import {Store} from '@ngrx/store'
import * as fromRoot from '../app.reducer';
import * as UI from '../shared/ui.actions';
import * as Auth from './auth.actions';

@Injectable()
export class AuthService{
    
    constructor(private router:Router,
        private auth:AngularFireAuth, 
        private boletasService:BoletasService,
        private uiService:UIService,
        private store:Store<{ui:fromRoot.State}>
        ){}
    registerUser(authData:AuthData)
    {
        //this.uiService.loadingSateChanged.next(true);
        this.store.dispatch(new UI.StartLoading());
        this.auth.createUserWithEmailAndPassword(authData.email,authData.password)
        .then(result=>{
            //this.uiService.loadingSateChanged.next(false);
            this.store.dispatch(new UI.StopLoading());
        })
        .catch(error=>{
            this.uiService.showSnackBar(error.message);
            this.store.dispatch(new UI.StopLoading());
        });
    }
    login(authData:AuthData){
        this.store.dispatch(new UI.StartLoading());
        this.auth.signInWithEmailAndPassword(authData.email,authData.password)
        .then(
            result=>{console.log(result);
                this.store.dispatch(new UI.StopLoading());
            })
        .catch(error=>{
            this.uiService.showSnackBar(error.message);
            this.store.dispatch(new UI.StopLoading());
        });
    }
    logout(){
        this.auth.signOut();
    }
   

    
    initAuthListener(){
        this.auth.authState.subscribe(user=>{
            if(user){
               this.store.dispatch(new Auth.SetAuthenticated());
                this.router.navigate(['/boletas']);
            }else{
                this.store.dispatch(new Auth.SetUnauthenticated());
                this.boletasService.cancelSubscriptions();
                this.router.navigate(["/login"])
            }

        });
    }
}