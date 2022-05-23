import { Pipe, PipeTransform } from '@angular/core';
import { People } from '../../people.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: People[], args: string, order: string): People[] {
    if (value) {
      return value.sort((a: People, b: People) => {
        if (a[args as keyof People] < b[args as keyof People]) {
          return -1;
        } else if (b[args as keyof People]  < a[args as keyof People] ) {
          return 1;
        }

        return 0;
      });
    }

    return [];
  }

}
