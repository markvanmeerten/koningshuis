import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isOneOf',
  pure: true
})
export class IsOneOfPipe implements PipeTransform {
  public transform<T>(value: T, compareTo: T | T[]): boolean {
    if (!value) {
      return false;
    }

    const compareValues = (Array.isArray(compareTo))
      ? compareTo
      : [compareTo];

    return compareValues.map((compareValue) => {
      return compareValue === value;
    }).some((foundStatus) => foundStatus);
  }
}
