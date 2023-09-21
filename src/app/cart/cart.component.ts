import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Book } from '../types/book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  cartLength(): number {
    return this.cartService.getCart().length;
  }

  getCart(): Book[] {
    return this.cartService.getCart();
  }

  removeFromCart(book: Book): void {
    this.cartService.removeFromCart(book);
  }
}
