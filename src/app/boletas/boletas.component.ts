import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Boleta } from './boleta.model';
import { BoletasService } from './boletas.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-boletas',
  templateUrl: './boletas.component.html',
  styleUrls: ['./boletas.component.css']
})
export class BoletasComponent implements OnInit, OnDestroy {
  boletasEmitidas:MatTableDataSource<Boleta>;
  boletasSubscription:Subscription;
  displayedColumns: string[] = ['receptorNombre', 'monto', 'fechaEmision', 'cobrado'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private boletasService:BoletasService,private router:Router) { }
  ngOnDestroy(): void {
    this.boletasSubscription.unsubscribe();
  }


  ngOnInit(): void {
    this.boletasService.fetchBoletasEmitidas();
    this.boletasSubscription=this.boletasService.boletasChanged
      .subscribe(boletas=> this.boletasEmitidas.data = boletas);
    this.boletasEmitidas = new MatTableDataSource<Boleta>(this.boletasService.boletasEmitidas);
    this.boletasEmitidas.paginator = this.paginator;
  }
  getRecord(boleta:Boleta){
    console.log(boleta);
    this.router.navigate(['/boletas/'+boleta.id]);
  }
  addNew(){
    this.router.navigate(['./boletas/new']);
  }

}
