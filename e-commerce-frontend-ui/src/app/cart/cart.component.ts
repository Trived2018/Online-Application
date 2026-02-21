import { Component, OnInit } from '@angular/core';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['Name','Description','Price','Discounted Price','Action'];
  
  cartDetails: any[] = [];

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCartDetails();
  }

  deleteCartItem(cartId: number){
    console.log("Deleting cart with productId:", cartId);

    this.productService.deleteCartItem(cartId).subscribe(
      (resp)=>{
        console.log("Deleted Successfully:", resp);

        // 🔥 REMOVE ITEM FROM UI IMMEDIATELY
        this.cartDetails = this.cartDetails.filter(
          item => item.product.productId !== cartId
        );

      },
      (err)=>{
        console.log("Error:", err);
        alert("Failed to delete: " + (err.error?.message || err.statusText));
      }
    );
  }

  getCartDetails(){
    this.productService.getCardDetails().subscribe(
      (response:any[])=>{
        console.log(response);
        this.cartDetails=response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  checkout(){
    
    this.router.navigate(['/buyProduct',{
      isSingleProductCheckout:false,id: 0
    }]);
  }

}
