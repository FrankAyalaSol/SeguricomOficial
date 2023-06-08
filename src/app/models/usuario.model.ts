export class Usuario{
  _id?:number;
    nombre: string;
    apellido: string;
    correo_electronico: string;
    celular: number;
    tipo_cliente: string;
    dni: number;
    fecha_nacimiento: string;
    password: string;

  constructor(
    nombre: string,
    apellido: string,
    correo_electronico: string,
    celular: number,
    tipo_cliente: string,
    dni: number,
    fecha_nacimiento: string,
    password: string

  ){
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo_electronico = correo_electronico;
    this.celular = celular;
    this.tipo_cliente = tipo_cliente;
    this.dni = dni;
    this.fecha_nacimiento = fecha_nacimiento;
    this.password = password;
  }

}
