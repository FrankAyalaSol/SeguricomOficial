import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultUsuario = [];
    for (const usuario of value) {
      if (usuario.dni.toLowerCase().indexOf(arg) > -1) {
        // console.log('sip');
        resultUsuario.push(usuario);
      }
    }
    return resultUsuario;
  }

}
