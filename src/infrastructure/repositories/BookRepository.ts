import { Repository } from "typeorm";
import { AppDataSource } from "../database/DataSource";
import { Book } from "../../domain/entities/Book";

export class BookRepository {
  private repo: Repository<Book>;

  constructor() {
    this.repo = AppDataSource.getRepository(Book);
  }

  async findById(id: string): Promise<Book | null> {
    return await this.repo.findOneBy({ id });
  }

  async save(book: Book): Promise<Book> {
    return await this.repo.save(book);
  }

  async findAll(): Promise<Book[]> {
    return await this.repo.find();
  }

  async returnBook(id: string): Promise<Book | null> {
    const book = await this.findById(id);
    if (book) {
      book.isAvailable = true;
      return await this.repo.save(book);
    }
    return null;
  }

}
