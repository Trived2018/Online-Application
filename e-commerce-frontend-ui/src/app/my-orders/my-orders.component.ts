import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ImageProcessingService } from '../image-processing.service';
import { ProductService } from '../_services/product.service';
import { MyOrderDetails } from '../_model/order.model';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  activeFilter: 'All' | 'Delivered' | 'Pending' | 'Cancelled' = 'All';
  myOrderDetails: MyOrderDetails[] = [];

  constructor(
    private productService: ProductService,
    private imageProcessingService: ImageProcessingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getOrderDetails();
  }

  getOrderDetails(): void {
    this.productService.getMyOrders().subscribe(
      (resp: MyOrderDetails[]) => {
        this.myOrderDetails = (resp || []).map((order: MyOrderDetails) => {
          if (order.product) {
            order.product = this.imageProcessingService.createImages(order.product);
          }
          return order;
        });
      }, (err) => {
        console.log(err);
      }
    );
  }

  get filteredOrders(): MyOrderDetails[] {
    if (this.activeFilter === 'All') {
      return this.myOrderDetails;
    }

    return this.myOrderDetails.filter((order: MyOrderDetails) => {
      return this.getStatusLabel(order.orderStatus) === this.activeFilter;
    });
  }

  setFilter(filter: 'All' | 'Delivered' | 'Pending' | 'Cancelled'): void {
    this.activeFilter = filter;
  }

  getStatusLabel(status: string): 'Delivered' | 'Pending' | 'Cancelled' {
    const value = (status || '').toLowerCase();

    if (value.includes('deliver')) {
      return 'Delivered';
    }

    if (value.includes('cancel')) {
      return 'Cancelled';
    }

    return 'Pending';
  }

  getStatusClass(status: string): string {
    const label = this.getStatusLabel(status);

    if (label === 'Delivered') {
      return 'status-delivered';
    }

    if (label === 'Cancelled') {
      return 'status-cancelled';
    }

    return 'status-pending';
  }

  getOrderDate(order: MyOrderDetails): string {
    const dynamicOrder: any = order as any;
    const rawDate = dynamicOrder.orderDate || dynamicOrder.createdAt || dynamicOrder.orderCreatedDate || dynamicOrder.date;

    if (!rawDate) {
      return 'Date not available';
    }

    const parsedDate = new Date(rawDate);

    if (Number.isNaN(parsedDate.getTime())) {
      return 'Date not available';
    }

    return parsedDate.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }

  getProductName(order: MyOrderDetails): string {
    return order.product?.productName || 'Product';
  }

  getOrderImage(order: MyOrderDetails): any {
    if (!order.product || !order.product.productImages || order.product.productImages.length === 0) {
      return 'assets/placeholder.svg';
    }

    return order.product.productImages[0]?.url || 'assets/placeholder.svg';
  }

  canCancel(order: MyOrderDetails): boolean {
    return this.getStatusLabel(order.orderStatus) === 'Pending';
  }

  viewDetails(order: MyOrderDetails): void {
    const productId = order.product?.productId;

    if (!productId) {
      alert('Product details are not available for this order.');
      return;
    }

    this.router.navigate(['/productViewDetails', { productId: productId }]);
  }

  trackOrder(order: MyOrderDetails): void {
    alert('Tracking is being prepared for order #' + order.orderId + '.');
  }

  cancelOrder(order: MyOrderDetails): void {
    alert('Cancel order feature is not enabled yet for order #' + order.orderId + '.');
  }

  buyAgain(order: MyOrderDetails): void {
    const productId = order.product?.productId;

    if (!productId) {
      alert('Product is not available for Buy Again.');
      return;
    }

    this.router.navigate(['/buyProduct', {
      isSingleProductCheckout: true,
      id: productId
    }]);
  }

}
