/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/books.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async getAllBooks(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async createBook(bookData: Book): Promise<Book> {
    const newBook = this.bookRepository.create(bookData);
    return await this.bookRepository.save(newBook);
  }
}
