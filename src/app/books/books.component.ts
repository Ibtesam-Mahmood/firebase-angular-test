import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  cart: Book[] = [];

  // Dependency injection of BooksService fromnthe Angular Service Container
  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  addToCart(book: Book) {
    this.cart.push(book);
  }
}
