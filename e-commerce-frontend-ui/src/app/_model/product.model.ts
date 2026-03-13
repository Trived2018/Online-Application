import { FileHandle } from "./file-handle.model"

export interface Product{
    productId:number,
    productName: string,
    productDescription: string,
    productDiscountedPrice: number,
    productActualPrice: number,
    productImages: FileHandle[],
    rating?: number,
    reviews?: number,
    brand?: string,
    category?: string,
    warranty?: string,
    stock?: number
}