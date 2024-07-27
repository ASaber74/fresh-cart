import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/products.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(products: Product[], searchTerm: string): Product[] {
    return products.filter((product) =>
      product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }
}
