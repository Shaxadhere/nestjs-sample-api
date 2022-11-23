import { ProductService } from './product/product.service';
import { ProductsController } from './product/product.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductService],
})
export class AppModule {}
