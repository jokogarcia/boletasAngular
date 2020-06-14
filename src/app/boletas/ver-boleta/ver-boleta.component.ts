import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoletasService } from '../boletas.service';
import { Boleta } from '../boleta.model';


@Component({
  selector: 'app-ver-boleta',
  templateUrl: './ver-boleta.component.html',
  styleUrls: ['./ver-boleta.component.css']
})
export class VerBoletaComponent implements OnInit {
  boletaSeleccionada:Boleta;
  constructor(private boletasService:BoletasService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.boletaSeleccionada=this.boletasService.get(id);


  }

}
