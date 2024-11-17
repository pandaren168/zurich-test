import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';

export function ApiGetProduct() {
  return applyDecorators(
    ApiOperation({ summary: 'Get product by code and location' }),
    ApiQuery({
      name: 'productCode',
      example: 1000,
      required: true,
      description: 'Product code',
    }),
    ApiQuery({
      name: 'location',
      example: 'West Malaysia',
      required: true,
      description: 'Product location',
    }),
    ApiResponse({ status: 200, description: 'Product retrieved successfully' }),
    ApiResponse({ status: 404, description: 'Product not found' }),
  );
}

export function ApiCreateProduct() {
  return applyDecorators(
    ApiOperation({ summary: 'Create a new product' }),
    ApiResponse({ status: 201, description: 'Product created successfully' }),
    ApiResponse({ status: 400, description: 'Bad request' }),
  );
}

export function ApiUpdateProduct() {
  return applyDecorators(
    ApiOperation({ summary: 'Update product' }),
    ApiQuery({
      name: 'productCode',
      example: 3000,
      required: true,
      description: 'Product code to update',
    }),
    ApiResponse({ status: 200, description: 'Product updated successfully' }),
    ApiResponse({ status: 404, description: 'Product not found' }),
    ApiResponse({ status: 400, description: 'Bad request' }),
  );
}

export function ApiDeleteProduct() {
  return applyDecorators(
    ApiOperation({ summary: 'Delete product by code' }),
    ApiQuery({
      name: 'productCode',
      example: 3000,
      required: true,
      description: 'Product code to delete',
    }),
    ApiResponse({ status: 200, description: 'Product deleted successfully' }),
    ApiResponse({ status: 404, description: 'Product not found' }),
  );
}
