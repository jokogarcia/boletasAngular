import { Boleta } from './boleta.model';
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import {Subject} from 'rxjs/Subject'
import {Subscription} from 'rxjs'
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import * as UI from '../shared/ui.actions';


@Injectable()
export class BoletasService{
    private fbSubs:Subscription[]= [];
    constructor(
        private db:AngularFirestore,
        private store:Store<{ui:fromRoot.State}>
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
        this.store.dispatch(new UI.StartLoading());
        this.fbSubs.push(this.db.collection('misBoletas')
        .valueChanges({idField:'id'})
        .subscribe((boletas:Boleta[])=>{
            this.boletasEmitidas = boletas;
            this.boletasChanged.next([...this.boletasEmitidas]);
            this.store.dispatch(new UI.StopLoading());
        }, error=>{
            console.log(error);
            this.store.dispatch(new UI.StopLoading());
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
    