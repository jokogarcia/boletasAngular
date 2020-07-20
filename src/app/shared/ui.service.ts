import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable()
export class UIService{
    constructor(private snackbar:MatSnackBar){}
    loadingSateChanged = new Subject<boolean>();
    public showSnackBar(message:string,duration=3000,action?:string){
        this.snackbar.open(message,action,{
            duration:duration
        });
    }
}