export class RegistrarDetalle{
  _id?:number;
  respuesta_1:string;
  respuesta_2:string;
  respuesta_3:string;
  respuesta_4:string;
  respuesta_5:string;
  respuesta_6:string;

  constructor(
    respuesta_1:string,
    respuesta_2:string,
    respuesta_3:string,
    respuesta_4:string,
    respuesta_5:string,
    respuesta_6:string,
  ){
    this.respuesta_1 = respuesta_1;
    this.respuesta_2 = respuesta_2;
    this.respuesta_3 = respuesta_3;
    this.respuesta_4 = respuesta_4;
    this.respuesta_5 = respuesta_5;
    this.respuesta_6 = respuesta_6;
  }

}
