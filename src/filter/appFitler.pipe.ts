import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   *  @param {string} searchProperty
   * @returns {any[]}
   */
  transform(items: any[], searchText: string, searchProperty : string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it[searchProperty].toLocaleLowerCase().includes(searchText);
    });
  }
}
