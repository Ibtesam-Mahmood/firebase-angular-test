import { Component } from '@angular/core';

interface Book {
  name: string;
  author: string;
  url: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  isShowing: boolean = false;
  inputText: string = '';

  books: Book[] = [
    {
      name: 'Angular',
      author: 'Youtube',
      url: 'https://i.ytimg.com/vi/wkhClyW5uMc/maxresdefault.jpg',
    },
    {
      name: 'Angular Logo',
      author: 'Google',
      url: 'https://miro.medium.com/v2/resize:fit:1400/1*R1mfXLP9edcArZXwmGbGag.jpeg',
    },
  ];

  handleInput(event: any): void {
    this.inputText = event.target.value;
  }
}
