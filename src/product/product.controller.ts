import { ProductService } from './product.service';
import { ProductsType } from './product.interface';
import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(): ProductsType[] {
    return this.productService.getProducts();
  }
}
