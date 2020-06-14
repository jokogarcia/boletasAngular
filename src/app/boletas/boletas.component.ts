import { Component, OnInit, ViewChild } from '@angular/core';
import { Boleta } from './boleta.model';
import { BoletasService } from './boletas.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boletas',
  templateUrl: './boletas.component.html',
  styleUrls: ['./boletas.component.css']
})
export class BoletasComponent implements OnInit {
  boletasEmitidas:MatTableDataSource<Boleta>;
  displayedColumns: string[] = ['receptorNombre', 'monto', 'fechaEmision', 'cobrado'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private boletasService:BoletasService,private router:Router) { }


  ngOnInit(): void {
    this.boletasEmitidas = new MatTableDataSource<Boleta>(this.boletasService.boletasEmitidas);
    this.boletasEmitidas.paginator = this.paginator;
  }
  getRecord(boleta:Boleta){
    console.log(boleta);
    this.router.navigate(['/boletas/'+boleta.id]);
  }
  addNew(){
    this.router.navigate(['./new']);
  }

}
