import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/products.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchTerm: string = '';
  products: Product[] = [];

  constructor(
    private _ProductsService: ProductsService,
    private _CartService: CartService
  ) {}

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (response) => (this.products = response.data),
    });
  }

  addToCart(productId: string) {
    this._CartService.addToCart(productId).subscribe({
      next: (response) => console.log(response),
      error: (err) => console.log(err),
    });
  }
}
