import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'product_code' })
  productCode!: number;

  @Column()
  location: string = '';

  @Column('decimal', { precision: 10, scale: 2 })
  price!: number;

  @Column()
  description!: string;
}
