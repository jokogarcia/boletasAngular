import { Boleta } from './boleta.model';
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import {Subject} from 'rxjs/Subject'
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs/Observable';
import {Subscription} from 'rxjs'
import { UIService } from '../shared/ui.service';

@Injectable()
export class BoletasService{
    private fbSubs:Subscription[]= [];
    constructor(
        private db:AngularFirestore,
        private uiService:UIService
        ){}
    
    boletasChanged = new Subject<Boleta[]>();
    get(id: string): Boleta {
      var filtered= this.boletasEmitidas.filter(boleta=>boleta.id=id);
      if(filtered.length>0){
          return filtered.pop();
      }
      return null;

    }
    /**get_the_posts(){
    this.Post_collection = this.afs.collection('posts'); 
    return this.Posts = this.Post_collection.valueChanges({ idField: 'id' }); 
} */
    fetchBoletasEmitidas(){
        this.uiService.loadingSateChanged.next(true);
        this.fbSubs.push(this.db.collection('misBoletas')
        .valueChanges({idField:'id'})
        .subscribe((boletas:Boleta[])=>{
            this.boletasEmitidas = boletas;
            this.boletasChanged.next([...this.boletasEmitidas]);
            this.uiService.loadingSateChanged.next(false);
        }, error=>{
            console.log(error);
            this.uiService.loadingSateChanged.next(false);
        }));
    }
    boletasEmitidas:Boleta[];
    public addBoleta(boleta:Boleta){
        this.db.collection('misBoletas').add(boleta);
        
    }
    public removeBoleta(id:string){
        this.db.doc("misBoletas/"+id).delete();
        
    }
    public cancelSubscriptions(){
        this.fbSubs.forEach(sub=>sub.unsubscribe());
    }
}
    