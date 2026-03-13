import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from './product.service';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartStateService {
  private readonly cartQuantityStorageKey = 'cartProductQuantities';
  private cartItemCountSubject = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCountSubject.asObservable();

  constructor(
    private productService: ProductService,
    private userAuthService: UserAuthService
  ) {}

  setCartCount(count: number): void {
    this.cartItemCountSubject.next(Math.max(0, count || 0));
  }

  initializeCartQuantities(items: any[]): void {
    const storedQuantities = this.getAllCartQuantities();
    const nextQuantities = {};

    (items || []).forEach((item) => {
      const productId = item?.product?.productId;

      if (productId === undefined || productId === null) {
        return;
      }

      nextQuantities[productId] = storedQuantities[productId] || 1;
    });

    this.saveAllCartQuantities(nextQuantities);
  }

  setCartQuantity(productId: number, quantity: number): void {
    const quantities = this.getAllCartQuantities();
    quantities[productId] = Math.max(1, Number(quantity) || 1);
    this.saveAllCartQuantities(quantities);
  }

  getCartQuantity(productId: number): number {
    const quantities = this.getAllCartQuantities();
    return Math.max(1, Number(quantities[productId]) || 1);
  }

  removeCartQuantity(productId: number): void {
    const quantities = this.getAllCartQuantities();
    delete quantities[productId];
    this.saveAllCartQuantities(quantities);
  }

  clearCartQuantities(): void {
    sessionStorage.removeItem(this.cartQuantityStorageKey);
  }

  incrementCartCount(): void {
    this.cartItemCountSubject.next(this.cartItemCountSubject.value + 1);
  }

  decrementCartCount(): void {
    const nextValue = this.cartItemCountSubject.value - 1;
    this.cartItemCountSubject.next(Math.max(0, nextValue));
  }

  resetCartCount(): void {
    this.cartItemCountSubject.next(0);
  }

  refreshCartCount(): void {
    if (!this.userAuthService.isLoggedIn()) {
      this.resetCartCount();
      return;
    }

    if (this.userAuthService.isAdmin()) {
      this.resetCartCount();
      return;
    }

    this.productService.getCardDetails().subscribe(
      (items: any[]) => {
        this.setCartCount(Array.isArray(items) ? items.length : 0);
      },
      () => {
        this.resetCartCount();
      }
    );
  }

  private getAllCartQuantities(): { [key: number]: number } {
    const storedValue = sessionStorage.getItem(this.cartQuantityStorageKey);

    if (!storedValue) {
      return {};
    }

    try {
      return JSON.parse(storedValue);
    } catch {
      return {};
    }
  }

  private saveAllCartQuantities(quantities: { [key: number]: number }): void {
    sessionStorage.setItem(this.cartQuantityStorageKey, JSON.stringify(quantities));
  }
}
