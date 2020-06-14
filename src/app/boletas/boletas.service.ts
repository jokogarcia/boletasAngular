import { Boleta } from './boleta.model';
import { Injectable } from '@angular/core';

@Injectable()
export class BoletasService{
    get(id: string): Boleta {
      var filtered= this.boletasEmitidas.filter(boleta=>boleta.id=id);
      if(filtered.length>0){
          return filtered.pop();
      }
      return null;

    }
    boletasEmitidas:Boleta[] = [
        {id:"1",receptorNombre:"Homero Simpson", receptorCuit:"302211562137",monto:250,fechaEmision:new Date(),cobrado:new Date()},
        {id:"2",receptorNombre:"Carlos Calvo", receptorCuit:"302211562137",monto:333,fechaEmision:new Date(),cobrado:new Date()},
        {id:"3",receptorNombre:"Cosme Fulanito", receptorCuit:"3022115651437",monto:250,fechaEmision:new Date()},
    ];
    public addBoleta(boleta:Boleta){
        this.boletasEmitidas.push(boleta);
    }
    public removeBoleta(id:string){
        this.boletasEmitidas = this.boletasEmitidas.filter(item=>item.id != id);
    }
}