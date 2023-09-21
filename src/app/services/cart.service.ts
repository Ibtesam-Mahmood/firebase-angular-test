import { Injectable } from '@angular/core';
import { Book } from '../types/book';

@Injectable({
  // Service is proved in the root module (AppModule), aka globally
  providedIn: 'root',
})
export class CartService {
  cart: Book[] = [];

  constructor() {}

  addToCart(book: Book) {
    this.cart.push(book);
  }
}
