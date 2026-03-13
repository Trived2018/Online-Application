import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from '../_model/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ShowProductImagesDialogComponent } from '../show-product-images-dialog/show-product-images-dialog.component';
import { ImageProcessingService } from '../image-processing.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent implements OnInit {
  
  pageNumber: number = 0;
  readonly pageSize: number = 12;
  searchKeyword: string = '';
  hasNextPage: boolean = false;
  isLoading: boolean = false;
  productDetails: Product[] = [];
  displayedColumns: string[] = ['id', 'image', 'name', 'description', 'price', 'originalPrice', 'actions'];
  
  constructor(private productService: ProductService,
    public imagesDialog: MatDialog,
    private imageProcessingService:ImageProcessingService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  onSearch(): void {
    this.pageNumber = 0;
    this.getAllProducts();
  }

  clearSearch(): void {
    this.searchKeyword = '';
    this.pageNumber = 0;
    this.getAllProducts();
  }

  public getAllProducts(): void {
    this.isLoading = true;
    this.productService.getAllProducts(this.pageNumber, this.searchKeyword)
    .pipe(
      map((x:Product[],i) =>x.map((product:Product)=> this.imageProcessingService.createImages(product)))
    )
    .subscribe(
      (resp:Product[])=>{
        this.productDetails = resp;
        this.hasNextPage = resp.length === this.pageSize;
        this.isLoading = false;
      },(error:HttpErrorResponse)=>{
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  previousPage(): void {
    if (this.pageNumber <= 0) {
      return;
    }

    this.pageNumber = this.pageNumber - 1;
    this.getAllProducts();
  }

  nextPage(): void {
    if (!this.hasNextPage) {
      return;
    }

    this.pageNumber = this.pageNumber + 1;
    this.getAllProducts();
  }

  deleteProduct(productId: number): void {
    const pageHadSingleItem = this.productDetails.length === 1;

    this.productService.deleteProduct(productId).subscribe(
    (resp)=>{
      if (pageHadSingleItem && this.pageNumber > 0) {
        this.pageNumber = this.pageNumber - 1;
      }
      this.getAllProducts();
    },
    (error:HttpErrorResponse)=>{
      console.log(error);
    }
    );
  }

  showImages(product: Product): void {
    this.imagesDialog.open(ShowProductImagesDialogComponent,{
      data:{
        images:product.productImages
      },
      height:'500px',
      width:'800px'
    });
  }

  uploadProductImage(productId: number): void {
    this.router.navigate(['/addNewProduct', { productId: productId }]);
  }

  editProductDetails(productId: number): void {
    this.router.navigate(['/addNewProduct',{productId:productId}]);
  }

  getFirstImage(product: Product): any {
    if (!product || !product.productImages || product.productImages.length === 0) {
      return '';
    }

    return product.productImages[0].url;
  }
}
