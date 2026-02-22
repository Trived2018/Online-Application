import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';


@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrls: ['./product-view-details.component.css']
})
export class ProductViewDetailsComponent implements OnInit {

  selectedProductIndex=0;
  product: Product;
  thumbnailColumns: number = 3;

  constructor(private activatedRoute: ActivatedRoute,
    private router:Router,
    private productService: ProductService) {}

  ngOnInit(): void {
    this.updateThumbnailColumns();
    this.product = this.activatedRoute.snapshot.data['product'];
    console.log(this.product);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateThumbnailColumns();
  }

  addToCart(productId){
    this.productService.addToCart(productId).subscribe(
      (response) =>{
        console.log(response);
      }, (error)=>{
        console.log(error);
      }
    );
  }

  changeIndex(index){
    this.selectedProductIndex=index;
  }

  buyProduct(productId){
    this.router.navigate(['/buyProduct',{
      isSingleProductCheckout:true,id:productId
    }]);
  }

  private updateThumbnailColumns(): void {
    this.thumbnailColumns = window.innerWidth < 576 ? 2 : 3;
  }
}
