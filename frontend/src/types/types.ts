export interface Book {
  _id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  author: string;
  publishYear: number;
  description: string;
}

export interface BooksTypesProps {
  books: Book[];
}

export interface BookTypesProps {
  book: Book;
}

export interface BookAddProps {
  book: Book;
  onClose: () => void;
}

export type ShowType = "table" | "card";
