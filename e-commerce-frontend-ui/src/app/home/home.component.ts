import { Component, HostListener, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { map } from 'rxjs/operators';
import { ImageProcessingService } from '../image-processing.service';
import { Product } from '../_model/product.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageNumber: number=0;
  productDetails: Product[] = [];
  gridCols: number = 4;
  gridRowHeight: string = '3:5';

  showLoadButton=false;

  constructor(private productService: ProductService,
    private imageProcessingService: ImageProcessingService,
    private router: Router) { }

  ngOnInit(): void {
    this.updateGridLayout();
    this.getAllProducts();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateGridLayout();
  }

  searchByKeyword(searchKeyword: string){
    console.log(searchKeyword);
    this.pageNumber = 0;
    this.productDetails=[];
    this.getAllProducts(searchKeyword);
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
    this.getAllProducts();
  }

  showProductDetails(productId: number){
    this.router.navigate(['/productViewDetails',{productId: productId}]);
  }

  private updateGridLayout(): void {
    const screenWidth = window.innerWidth;

    if (screenWidth < 576) {
      this.gridCols = 1;
      this.gridRowHeight = '1:1.4';
      return;
    }

    if (screenWidth < 992) {
      this.gridCols = 2;
      this.gridRowHeight = '1:1.2';
      return;
    }

    this.gridCols = 4;
    this.gridRowHeight = '3:5';
  }

}
