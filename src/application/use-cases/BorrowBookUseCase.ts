import { LoanRequestDTO } from "../dtos/LoanRequestDTO";
import { BookRepository } from "../../infrastructure/repositories/BookRepository";

export class BorrowBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute(dto: LoanRequestDTO): Promise<void> {
    const book = await this.bookRepository.findById(dto.bookId);
    if (!book || !book.isAvailable) {
      throw new Error("Le livre n'est pas disponible.");
    }
    book.isAvailable = false;
    await this.bookRepository.save(book);
  }
}
