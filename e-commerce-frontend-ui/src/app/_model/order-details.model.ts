import { OrderQuantity } from "./order-quantiy.model";

export interface OrderDetails{
    fullName: string;
    fullAddress:string;
    contactNumber:string;
    alternateContactNumber:string;
    transactionId: string,
    orderProductQuantityList:OrderQuantity[];
}