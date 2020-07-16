import { User } from './user.model';
import { AuthData } from './auth-data.model';
import {Subject} from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth'
import { BoletasService } from '../boletas/boletas.service';

@Injectable()
export class AuthService{
    authChange = new Subject<boolean>();
    private isAuthenticated:boolean;
    constructor(private router:Router, private auth:AngularFireAuth, private boletasService:BoletasService){}
    registerUser(authData:AuthData){console.log(authData);
        this.auth.createUserWithEmailAndPassword(authData.email,authData.password)
        .then(result=>console.log(result))
        .catch(error=> console.log(error));
    }
    login(authData:AuthData){
        this.auth.signInWithEmailAndPassword(authData.email,authData.password)
        .then(result=>console.log(result))
        .catch(error=> console.log(error));
    }
    logout(){
        this.auth.signOut();
    }
   
    isAuth(){
        return this.isAuthenticated;
    }
    
    initAuthListener(){
        this.auth.authState.subscribe(user=>{
            if(user){
                this.isAuthenticated=true;
                this.authChange.next(true);
                this.router.navigate(['/boletas']);
            }else{
                this.isAuthenticated=false;
                this.boletasService.cancelSubscriptions();
                this.authChange.next(false);
                this.router.navigate(["/login"])
            }

        });
    }
}