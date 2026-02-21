import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';
import { OrderDetails } from '../_model/order-details.model';
import { MyOrderDetails } from '../_model/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "";

  constructor(private httpClient: HttpClient) { }

  public createTransaction(amount: any) {
    return this.httpClient.get(this.baseUrl + "/createTransaction/" + amount);
  }

  public marksAsDelivered(orderId: any) {
    return this.httpClient.get(this.baseUrl + "/markOrderAsDelivered/" + orderId);
  }

  public getAllOrderDetailsForAdmin(status: string): Observable<MyOrderDetails[]> {
    return this.httpClient.get<MyOrderDetails[]>(this.baseUrl + "/getAllOrderDetails/" + status);
  }

  public getMyOrders(): Observable<MyOrderDetails[]> {
    return this.httpClient.get<MyOrderDetails[]>(this.baseUrl + "/getOrderDetails");
  }

  public deleteCartItem(cartId: any) {
    return this.httpClient.delete(this.baseUrl + "/deleteCartItem/" + cartId);
  }

  public addProduct(product: FormData) {
    return this.httpClient.post<Product>(this.baseUrl + "/addNewProduct", product);
  }

  public getAllProducts(pageNumber: any, searchKeyword: string = "") {
    return this.httpClient.get<Product[]>(
      this.baseUrl + "/getAllProducts?pageNumber=" + pageNumber + "&searchKey=" + searchKeyword
    );
  }

  public getProductDetailsById(productId: any) {
    return this.httpClient.get<Product>(this.baseUrl + "/getProductDetailsById/" + productId);
  }

  public deleteProduct(productId: number) {
    return this.httpClient.delete(this.baseUrl + "/deleteProductDetails/" + productId);
  }

  public getProductDetails(isSingleProductCheckout: any, productId: any) {
    return this.httpClient.get<Product[]>(
      this.baseUrl + "/getProductDetails/" + isSingleProductCheckout + "/" + productId
    );
  }

  public placeOrder(orderDetails: OrderDetails, isCartCheckout: any) {
    return this.httpClient.post(
      this.baseUrl + "/placeOrder/" + isCartCheckout,
      orderDetails
    );
  }

  public addToCart(productId: any) {
    return this.httpClient.get(this.baseUrl + "/addToCart/" + productId);
  }

  public getCardDetails() {
    return this.httpClient.get(this.baseUrl + "/getCartDetails");
  }
}