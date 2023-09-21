import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../types/book';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent {
  // DI the cart service
  constructor(private cartService: CartService) {}

  // Get input from parent component
  @Input() book!: Book;

  addToCart() {
    // Use the DI cart service to add the book to the cart
    this.cartService.addToCart(this.book);
  }
}
