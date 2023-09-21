import { Component } from '@angular/core';
import { Book } from '../types/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  books: Book[] = [
    {
      name: 'Angular',
      author: 'Youtube',
      url: 'https://i.ytimg.com/vi/wkhClyW5uMc/maxresdefault.jpg',
      amount: 20,
    },
    {
      name: 'Angular Logo',
      author: 'Google',
      url: 'https://miro.medium.com/v2/resize:fit:1400/1*R1mfXLP9edcArZXwmGbGag.jpeg',
      amount: 10,
    },
    {
      name: 'Photography',
      author: 'Unsplash',
      url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      amount: 30,
    },
  ];

  cart: Book[] = [];

  addToCart(book: Book) {
    this.cart.push(book);
  }
}
