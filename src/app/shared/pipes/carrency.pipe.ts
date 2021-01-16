import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carrency'
})
export class CarrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
