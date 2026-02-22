import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';
import { FileHandle } from '../_model/file-handle.model';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  isNewProduct: boolean = true;
  imagePreviewCols: number = 4;

  product: Product = {
    productId: null,
    productName: '',
    productDescription: '',
    productActualPrice: 0,
    productDiscountedPrice: 0,
    productImages: []
  };

  constructor(
    private productService: ProductService,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute
  ) {}

  // ✅ FIXED ngOnInit
  ngOnInit(): void {
    this.updateImagePreviewCols();
    const resolvedProduct = this.activatedRoute.snapshot.data['product'];

    if (resolvedProduct) {
      this.product = resolvedProduct;
      this.isNewProduct = !this.product.productId;
    } else {
      this.resetProduct();
      this.isNewProduct = true;
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateImagePreviewCols();
  }

  // ✅ ADD PRODUCT (FIXED)
  addProduct(productForm: NgForm): void {

    if (productForm.invalid) {
      return;
    }

    const productFormData = this.prepareFormData(this.product);

    this.productService.addProduct(productFormData).subscribe({
      next: (response: Product) => {
        alert('Product added successfully');

        // reset form + model
        productForm.resetForm();
        this.resetProduct();
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
        alert('Failed to add product');
      }
    });
  }

  // ✅ CREATE FORMDATA
  prepareFormData(product: Product): FormData {
    const formData = new FormData();

    formData.append(
      'product',
      new Blob([JSON.stringify(product)], { type: 'application/json' })
    );

    for (let i = 0; i < product.productImages.length; i++) {
      formData.append(
        'imageFile',
        product.productImages[i].file,
        product.productImages[i].file.name
      );
    }

    return formData;
  }

  // ✅ FILE SELECT
  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {

      const file = event.target.files[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      };

      this.product.productImages.push(fileHandle);
    }
  }

  // ✅ DRAG & DROP
  fileDropped(fileHandle: FileHandle): void {
    this.product.productImages.push(fileHandle);
  }

  // ✅ REMOVE IMAGE
  removeImages(index: number): void {
    this.product.productImages.splice(index, 1);
  }

  // ✅ RESET PRODUCT MODEL
  private resetProduct(): void {
    this.product = {
      productId: null,
      productName: '',
      productDescription: '',
      productActualPrice: 0,
      productDiscountedPrice: 0,
      productImages: []
    };
  }

  private updateImagePreviewCols(): void {
    const screenWidth = window.innerWidth;

    if (screenWidth < 576) {
      this.imagePreviewCols = 2;
      return;
    }

    if (screenWidth < 992) {
      this.imagePreviewCols = 3;
      return;
    }

    this.imagePreviewCols = 4;
  }
}
