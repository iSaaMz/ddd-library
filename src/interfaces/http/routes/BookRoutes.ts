import { Router } from "express";
import { BorrowBookUseCase } from "../../../application/use-cases/BorrowBookUseCase";
import { BookRepository } from "../../../infrastructure/repositories/BookRepository";

const router = Router();
const bookRepository = new BookRepository();

router.post("/borrow", async (req, res) => {
    try {
        const { userId, bookId } = req.body;
        const useCase = new BorrowBookUseCase(bookRepository);
        await useCase.execute({ userId, bookId });
        res.status(200).send("Livre emprunté avec succès.");
    } catch (err: any) {
        res.status(400).send(err.message);
    }
});

router.post("/return", async (req, res) => {
    try {
      const { bookId } = req.body;
      const returnedBook = await bookRepository.returnBook(bookId);
  
      if (returnedBook) {
        res.status(200).send("Livre retourné avec succès.");
      } else {
        res.status(404).send("Livre introuvable.");
      }
    } catch (err: any) {
      res.status(500).send("Erreur lors du retour du livre.");
    }
  });

router.get("/books", async (req, res) => {
    try {
        const books = await bookRepository.findAll();
        res.status(200).json(books);
    } catch (err: any) {
        res.status(500).send("Erreur lors de la récupération des livres.");
    }
});

export default router;
