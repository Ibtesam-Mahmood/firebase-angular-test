import { Injectable } from '@angular/core';
import { Book } from '../types/book';

@Injectable()
export class BooksService {
  constructor() {}

  getBooks(): Book[] {
    return [
      {
        id: 1,
        name: 'Angular',
        author: 'Youtube',
        url: 'https://i.ytimg.com/vi/wkhClyW5uMc/maxresdefault.jpg',
        amount: 20,
      },
      {
        id: 2,
        name: 'Angular Logo',
        author: 'Google',
        url: 'https://miro.medium.com/v2/resize:fit:1400/1*R1mfXLP9edcArZXwmGbGag.jpeg',
        amount: 10,
      },
      {
        id: 3,
        name: 'Photography',
        author: 'Unsplash',
        url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        amount: 30,
      },
    ];
  }
}
