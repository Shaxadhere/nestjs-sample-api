import { ProductsType } from './product.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getProducts(): ProductsType[] {
    const products: ProductsType[] = [
      {
        name: 'iPhoneX',
        price: 50000,
        image: ['img1.jpg', 'img2.jpg'],
      },
    ];
    return products;
  }
}
