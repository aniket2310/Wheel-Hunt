import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupee',
  standalone: true,
  
})
export class RupeePipe implements PipeTransform {
  transform(value: number | string, locale: string = 'en-IN', fractionDigits: number = 0): string {
    if (value == null || isNaN(+value)) return '';
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }).format(+value);
  }
}
