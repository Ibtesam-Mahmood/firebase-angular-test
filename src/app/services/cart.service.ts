import { Injectable } from '@angular/core';
import { Book } from '../types/book';

@Injectable({
  // Service is proved in the root module (AppModule), aka globally
  providedIn: 'root',
})
export class CartService {
  cart: Book[] = [];

  constructor() {}

  // Returns the cart
  getCart(): Book[] {
    return this.cart;
  }

  // Adds a book to the card
  addToCart(book: Book): void {
    this.cart.push(book);
  }

  // Removes a book from the cart
  removeFromCart(book: Book): void {
    const newCart: Book[] = [];
    var removed: boolean = false;

    this.cart.forEach((e) => {
      if (e.id == book.id && !removed) {
        // Only removes the first instance of the book
        removed = true;
      } else {
        newCart.push(e);
      }
    });

    this.cart = newCart;
  }
}
