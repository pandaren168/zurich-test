import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { Product } from './product.entity';
import {
  ApiGetProduct,
  ApiCreateProduct,
  ApiUpdateProduct,
  ApiDeleteProduct,
} from '../swagger/swagger.decorators';

@ApiTags('Product')
@ApiBearerAuth()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiGetProduct()
  @UsePipes(new ValidationPipe())
  async getProduct(
    @Query('productCode') productCode: number,
    @Query('location') location: string,
  ): Promise<Product | null> {
    return this.productService.getProduct(productCode, location);
  }

  @Post()
  @ApiCreateProduct()
  @UsePipes(new ValidationPipe())
  async createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productService.createProduct(createProductDto);
  }

  @Put()
  @ApiUpdateProduct()
  @UsePipes(new ValidationPipe())
  async updateProduct(
    @Query('productCode') productCode: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.updateProduct(productCode, updateProductDto);
  }

  @Delete()
  @ApiDeleteProduct()
  async deleteProduct(
    @Query('productCode') productCode: number,
  ): Promise<void> {
    return this.productService.deleteProduct(productCode);
  }
}
