import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { BookItemComponent } from './books/book-item/book-item.component';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule, FormsModule, BooksModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
