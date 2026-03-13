import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../_model/product.model';
import { CartStateService } from '../_services/cart-state.service';
import { ProductService } from '../_services/product.service';


@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrls: ['./product-view-details.component.css']
})
export class ProductViewDetailsComponent implements OnInit {

  selectedProductIndex=0;
  product: Product;

  constructor(private activatedRoute: ActivatedRoute,
    private router:Router,
    private cartStateService: CartStateService,
    private productService: ProductService) {}

  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product'];
    if (!this.product.rating) {
      this.product.rating = 4;
    }
  }

  addToCart(productId: number): void {
    this.productService.addToCart(productId).subscribe(
      (response) =>{
        console.log(response);
        this.cartStateService.incrementCartCount();
      }, (error)=>{
        console.log(error);
      }
    );
  }

  changeIndex(index: number): void {
    this.selectedProductIndex=index;
  }

  buyProduct(productId: number): void {
    this.router.navigate(['/buyProduct',{
      isSingleProductCheckout:true,id:productId
    }]);
  }

  getStarArray(count: number): number[] {
    return Array(Math.max(0, count)).fill(0);
  }

  getFilledStars(): number {
    return Math.floor(this.product.rating || 4);
  }

  getEmptyStars(): number {
    return 5 - this.getFilledStars();
  }

  getDiscountPercent(): number {
    const actual = this.product.productActualPrice || 0;
    const discounted = this.product.productDiscountedPrice || 0;

    if (!actual || actual <= discounted) {
      return 0;
    }

    return Math.round(((actual - discounted) / actual) * 100);
  }
}
