import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Category } from '../models/products.model';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrls: ['./categories-slider.component.scss'],
})
export class CategoriesSliderComponent implements OnInit {
  categories: Category[] = [];
  constructor(private _ProductsService: ProductsService) {}

  ngOnInit(): void {
    this._ProductsService.getCategories().subscribe({
      next: (response) => (this.categories = response.data),
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 7,
      },
    },
    nav: false,
  };
}
