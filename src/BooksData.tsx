export type Book = {
    title: string;
    author: string;
    isbn: string;
    price: number;
}

export type Books = Book[]

export const books: Books= [
   {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-3-16-148410-0",
    "price": 56.99
  },
  {
    "title": "The Grapes of Wrath",
    "author": "John Steinbeck",
    "isbn": "978-3-16-148410-1",
    "price": 24.99
  },
  {
    "title": "Nineteen Eighty-Four",
    "author": "George Orwell",
    "isbn": "978-3-16-148410-2",
    "price": 15.99
  },
  {
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "isbn": "978-3-16-148410-3",
    "price": 12.99
  },
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "isbn": "978-3-16-148410-4",
    "price": 19.99
  },
  {
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "isbn": "978-3-16-148410-5",
    "price": 29.99
  },
  {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "isbn": "978-3-16-148410-6",
    "price": 19.99
  }
];