import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto, UpdateProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async getProduct(
    productCode: number,
    location: string,
  ): Promise<Product | null> {
    return this.productRepository.findOne({ where: { productCode, location } });
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async updateProduct(
    productCode: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { productCode },
    });

    if (!product) {
      throw new NotFoundException(
        `Product with code ${productCode} not found.`,
      );
    }

    Object.assign(product, updateProductDto);
    return this.productRepository.save(product);
  }

  async deleteProduct(productCode: number): Promise<void> {
    const result = await this.productRepository.delete({ productCode });
    if (result.affected === 0) {
      throw new NotFoundException(
        `Product with code ${productCode} not found.`,
      );
    }
  }
}
