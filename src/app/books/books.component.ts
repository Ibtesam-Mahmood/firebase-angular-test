import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  name: string = 'Angular';
  author: string = 'Youtube';
  src: string = 'https://i.ytimg.com/vi/wkhClyW5uMc/maxresdefault.jpg';

  name2: string = 'Angular Logo';
  author2: string = 'Google';
  src2: string =
    'https://miro.medium.com/v2/resize:fit:1400/1*R1mfXLP9edcArZXwmGbGag.jpeg';
}