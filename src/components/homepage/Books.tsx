import React from "react";
import Image from "next/image";
import Link from "next/link";
import BookCard from "../shared/BookCard";
import { Ibook } from "@/types/books.type";

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");

  if (!response.ok) {
    throw new Error("Failed to fetch books data");
  }

  return response.json();
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-12 lg:px-8">
      {/* Section heading */}
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Find your next read
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore Popular Books 
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Discover timeless classics, exciting adventures, and stories worth
            remembering.
          </p>
        </div>

        <p className="text-sm font-medium text-slate-500">
          {booksData.length} books available
        </p>
      </div>

      {/* Book cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {booksData.slice(0, 6).map((book: Ibook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
