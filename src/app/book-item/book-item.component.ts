import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../types/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent {
  // Get input from parent component
  @Input() book!: Book;

  // Used to send an event to parent component
  @Output('addToCart') addToCartEvent = new EventEmitter<Book>();

  addToCart() {
    // Send event to parent component
    this.addToCartEvent.emit(this.book);
  }
}
