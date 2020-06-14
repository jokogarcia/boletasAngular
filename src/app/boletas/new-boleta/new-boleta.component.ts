import { Component, OnInit } from '@angular/core';
import { BoletasService } from '../boletas.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-boleta',
  templateUrl: './new-boleta.component.html',
  styleUrls: ['./new-boleta.component.css']
})
export class NewBoletaComponent implements OnInit {

  constructor(private boletasService:BoletasService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    var id = Math.round(Math.random()*10000).toString();
    this.boletasService.addBoleta({
      receptorNombre:form.value.receptorNombre,
      receptorCuit:form.value.receptorCuit,
      fechaEmision:form.value.fechaEmision,
      cobrado:form.value.fechaPago,
      monto:form.value.monto,
      id:id
    });
    this.router.navigate(['/boletas/'+id]);
  }

}
