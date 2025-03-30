import { DataSource } from "typeorm";
import { Book } from "../../domain/entities/Book";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "library.db",
  synchronize: true,
  logging: false,
  entities: [Book],
});
