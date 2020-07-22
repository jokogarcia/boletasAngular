import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable()
export class UIService{
    constructor(private snackbar:MatSnackBar){}
    public showSnackBar(message:string,duration=3000,action?:string){
        this.snackbar.open(message,action,{
            duration:duration
        });
    }
}