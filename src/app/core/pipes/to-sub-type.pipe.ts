import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toSubType',
  pure: true
})
export class ToSubTypePipe implements PipeTransform {
  public transform<MainType, SubType extends MainType>(value: MainType, castTo: SubType): SubType {
    return value as SubType;
  }
}
