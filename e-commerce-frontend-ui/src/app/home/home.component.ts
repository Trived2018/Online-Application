import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { map } from 'rxjs/operators';
import { ImageProcessingService } from '../image-processing.service';
import { Product } from '../_model/product.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CartStateService } from '../_services/cart-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageNumber: number=0;
  productDetails: Product[] = [];
  currentSearchKey: string = '';

  showLoadButton=false;

  constructor(private productService: ProductService,
    private imageProcessingService: ImageProcessingService,
    private cartStateService: CartStateService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.currentSearchKey = (params.get('search') || '').trim();
      this.pageNumber = 0;
      this.productDetails = [];
      this.getAllProducts(this.currentSearchKey);
    });
  }

  searchByKeyword(searchKeyword: string){
    this.currentSearchKey = (searchKeyword || '').trim();
    this.pageNumber = 0;
    this.productDetails=[];
    this.getAllProducts(this.currentSearchKey);
  }

  public getAllProducts(searchKey: string=""){
    this.productService.getAllProducts(this.pageNumber, searchKey)
      .pipe(
            map((x:Product[],i) =>x.map((product:Product)=> this.imageProcessingService.createImages(product)))
      )
     .subscribe(
        (resp:Product[])=>{
          console.log(resp); 
          if(resp.length == 12){
            this.showLoadButton = true;
          }else{
            this.showLoadButton = false;
          }
          resp.forEach(p=> this.productDetails.push(p));
        // this.productDetails=resp;
        },(error:HttpErrorResponse)=>{
        console.log(error);
        }
     );
  }

  loadMoreProduct(){
    this.pageNumber=this.pageNumber+1;
    this.getAllProducts(this.currentSearchKey);
  }

  showProductDetails(productId: number){
    this.router.navigate(['/productViewDetails',{productId: productId}]);
  }

  addToCart(productId: number): void {
    this.productService.addToCart(productId).subscribe(
      (response) => {
        console.log(response);
        this.cartStateService.incrementCartCount();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}
