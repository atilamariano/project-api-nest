import { BookDTO } from './book.dto';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class BookService {
  async create(data: BookDTO) {}
}
