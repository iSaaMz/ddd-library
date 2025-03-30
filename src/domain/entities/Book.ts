import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ default: true })
  isAvailable: boolean;

  constructor() {
    this.id = "";
    this.title = "";
    this.author = ""; 
    this.isAvailable = true;
  }
}
