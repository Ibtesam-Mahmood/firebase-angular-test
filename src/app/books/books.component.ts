import { Component } from '@angular/core';

interface Book {
  name: string;
  author: string;
  url: string;
  amount: number;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  isShowing: boolean = true;
  inputText: string = '';

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
  ];

  handleInput(event: any): void {
    this.inputText = event.target.value;
  }
}
