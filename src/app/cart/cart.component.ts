import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartDetails: any = [];
  constructor(private _CartService: CartService) {}

  ngOnInit(): void {
    this._CartService.getLoggedUserCart().subscribe({
      next: (response) => (this.cartDetails = response.data),
      error: (err) => console.log(err),
    });
  }

  removeItem(productId: string) {
    this._CartService.removeItem(productId).subscribe({
      next: (response) => (this.cartDetails = response.data),
      error: (err) => console.log(err),
    });
  }

  updateProductQuantity(productId: string, count: number) {
    this._CartService.updateProductQuantity(productId, count).subscribe({
      next: (response) => (this.cartDetails = response.data),
      error: (err) => console.log(err),
    });
  }
}
