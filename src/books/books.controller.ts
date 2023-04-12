/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/books.entity';

@Controller('book')
export class BooksController {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  @Post('/create')
  async createBook(@Body() bookData: Book): Promise<Book> {
    const newBook = this.bookRepository.create(bookData);
    return await this.bookRepository.save(newBook);
  }
}
