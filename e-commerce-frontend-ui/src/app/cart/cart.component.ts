import { Component, OnInit } from '@angular/core';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';
import { Router } from '@angular/router';
import { CartStateService } from '../_services/cart-state.service';
import { ImageProcessingService } from '../image-processing.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['Image', 'Name', 'Price', 'Quantity', 'Total', 'Action'];
  
  cartDetails: any[] = [];

  constructor(private productService: ProductService,
    private cartStateService: CartStateService,
    private imageProcessingService: ImageProcessingService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCartDetails();
  }

  deleteCartItem(cartId: number, productId: number): void {
    console.log("Deleting cart item with cardId:", cartId);

    this.productService.deleteCartItem(cartId).subscribe(
      (resp)=>{
        console.log("Deleted Successfully:", resp);

        // 🔥 REMOVE ITEM FROM UI IMMEDIATELY
        this.cartDetails = this.cartDetails.filter(
          item => item.cardId !== cartId
        );
        this.cartStateService.removeCartQuantity(productId);
        this.cartStateService.decrementCartCount();

      },
      (err)=>{
        console.log("Error:", err);
        const errorMessage = err?.error?.message || err?.statusText || err?.message || "Unknown error";
        alert("Failed to delete: " + errorMessage);
      }
    );
  }

  getCartDetails(): void {
    this.productService.getCardDetails().subscribe(
      (response:any[])=>{
        console.log(response);
        this.cartDetails = response.map(item => {
          item.product = this.imageProcessingService.createImages(item.product);
          return item;
        });
        this.cartStateService.setCartCount(this.cartDetails.length);
        this.cartStateService.initializeCartQuantities(this.cartDetails);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  getItemQuantity(productId: number): number {
    return this.cartStateService.getCartQuantity(productId);
  }

  changeQuantity(productId: number, change: number): void {
    const nextQuantity = this.getItemQuantity(productId) + change;
    this.cartStateService.setCartQuantity(productId, Math.max(1, nextQuantity));
  }

  getLineTotal(item: any): number {
    return item.product.productDiscountedPrice * this.getItemQuantity(item.product.productId);
  }

  getSubtotal(): number {
    return this.cartDetails.reduce((total, item) => {
      return total + (item.product.productActualPrice * this.getItemQuantity(item.product.productId));
    }, 0);
  }

  getGrandTotal(): number {
    return this.cartDetails.reduce((total, item) => {
      return total + this.getLineTotal(item);
    }, 0);
  }

  getSavings(): number {
    return this.getSubtotal() - this.getGrandTotal();
  }

  getTotalItems(): number {
    return this.cartDetails.reduce((count, item) => {
      return count + this.getItemQuantity(item.product.productId);
    }, 0);
  }

  getFirstImage(item: any): any {
    if (!item || !item.product || !item.product.productImages || item.product.productImages.length === 0) {
      return null;
    }
    const img = item.product.productImages[0];
    return img && img.url ? img.url : null;
  }

  checkout(){
    
    this.router.navigate(['/buyProduct',{
      isSingleProductCheckout:false,id: 0
    }]);
  }

}
