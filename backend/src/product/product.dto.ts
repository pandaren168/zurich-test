import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 3000 })
  @IsNumber()
  @IsNotEmpty()
  productCode!: number;

  @ApiProperty({ example: 'East Malaysia' })
  @IsString()
  @IsNotEmpty()
  location!: string;

  @ApiProperty({ example: 700.0 })
  @IsNumber()
  @IsNotEmpty()
  price!: number;
}

export class UpdateProductDto {
  @ApiProperty({ example: 'West Malaysia' })
  @IsString()
  @IsNotEmpty()
  location!: string;

  @ApiProperty({ example: 750.0 })
  @IsNumber()
  @IsNotEmpty()
  price!: number;
}
