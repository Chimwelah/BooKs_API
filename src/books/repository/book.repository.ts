import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateBookDto } from '../dto/create-book.dto';
import { FilterBookDto } from '../dto/filter-book.dto';
import { UpdateBookDto } from '../dto/update-book.dto';
import { Book } from '../entity/book.entity';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {}
// getBooks = async (): Promise<Book[]> => {
//   return this.find();
// };

// getBooks = async (filter: FilterBookDto): Promise<Book[]> => {
//   const { title, author, category, min_year, max_year } = filter;

//   const query = this.createQueryBuilder('book');

//   if (title) {
//     query.andWhere('lower(book.title) LIKE :title', {
//       title: `%${title.toLowerCase()}%`,
//     });
//   }

//   if (author) {
//     query.andWhere('lower(book.author) LIKE :author', {
//       author: `%${author.toLowerCase()}%`,
//     });
//   }

//   if (category) {
//     query.andWhere('lower(book.category) LIKE :category', {
//       category: `%${category.toLowerCase()}%`,
//     });
//   }

//   if (min_year) {
//     query.andWhere('book.year >= :min_year', { min_year });
//   }

//   if (max_year) {
//     query.andWhere('book.year <= :max_year', { max_year });
//   }

//   try {
//     return await query.getMany();
//   } catch (error) {
//     throw new InternalServerErrorException();
//   }
// };

// getBookById = async (id: number): Promise<Book> => {
//   const book = await this.findOne({
//     where: { id },
//   });

//   if (!book) {
//     throw new NotFoundException(`Book with id ${id} not found`);
//   }

//   return book;
// };

// createBook = async (payload: CreateBookDto): Promise<Book> => {
//   const { title, author, category, year } = payload;

//   const book = this.create();
//   book.title = title;
//   book.author = author;
//   book.category = category;
//   book.year = year;

//   try {
//     book.save();
//   } catch (error) {
//     throw new InternalServerErrorException();
//   }

//   return book;
// };

// updateBookById = async (
//   id: number,
//   payload: UpdateBookDto,
// ): Promise<Book> => {
//   const { title, author, category, year } = payload;

//   const book = await this.getBookById(id);
//   if (title) book.title = title;
//   if (author) book.author = author;
//   if (category) book.category = category;
//   if (year !== undefined) book.year = year;

//   try {
//     book.save();
//   } catch (error) {
//     throw new InternalServerErrorException();
//   }

//   return book;
// };

// deleteBook = async (id: number): Promise<void> => {
//   const result = await this.delete(id);
//   if (result.affected === 0) {
//     throw new NotFoundException(`Book with id ${id} is not found`);
//   }
// };
// }
