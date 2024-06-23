import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entity/book.entity';
import { BookRepository } from './repository/book.repository';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,
  ) {}

  getBooks = async (): Promise<Book[]> => {
    return this.booksRepository.find();
  };

  getBookById = async (id: number): Promise<Book> => {
    return this.booksRepository.findOne({
      where: { id },
    });
  };

  createBook = async (payload: CreateBookDto): Promise<Book> => {
    const book = this.booksRepository.create(payload);

    return this.booksRepository.save(book);
  };

  updateBookById = async (
    id: number,
    payload: UpdateBookDto,
  ): Promise<Book> => {
    const book = await this.booksRepository.findOne({
      where: { id },
    });

    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    Object.assign(book, payload);

    return this.booksRepository.save(book);
  };

  deleteBook = async (id: number): Promise<void> => {
    const result = await this.booksRepository.delete({ id });

    if (result.affected === 0) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
  };
}
