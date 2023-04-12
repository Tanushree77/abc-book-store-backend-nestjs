/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  book_id: number;

  @Column({ nullable: true })
  book_code: string;

  @Column({ nullable: true })
  book_name: string;

  @Column({ nullable: true })
  book_category: string;

  @Column({ nullable: true })
  writer: string;

  @Column({ nullable: true })
  publisher: string;

  @Column({ nullable: true })
  qty: number;

  @Column({ nullable: true })
  purchase_price: number;

  @Column({ nullable: true })
  sell_price: number;
}
