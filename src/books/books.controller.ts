import {
  Get,
  Post,
  Query,
  Body,
  Controller,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entity/book.entity';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  async getBooks(): Promise<Book[]> {
    return this.bookService.getBooks();
  }

  @Get(':id')
  async getBookById(@Param('id') id: number): Promise<Book> {
    return this.bookService.getBookById(id);
  }

  @Post()
  async createBook(@Body() payload: CreateBookDto): Promise<Book> {
    return this.bookService.createBook(payload);
  }

  @Put(':id')
  async updateBookById(
    @Param('id') id: number,
    @Body() payload: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.updateBookById(id, payload);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number): Promise<void> {
    return this.bookService.deleteBook(id);
  }
}
