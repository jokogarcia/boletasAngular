

export interface Boleta{
    id:string;
    receptorNombre:string;
    receptorCuit:string;
    monto:number;
    fechaEmision:Date;
    cobrado?:Date;
}