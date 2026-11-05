"use client";

import { Ibook } from "@/types/books.type";

import { BooksContext } from "@/context/BooksContext";
import React, { useContext, useState } from "react";
import BookCard from "@/components/shared/BookCard";
import Image from "next/image";
import Link from "next/link";

const ListedBooksPage = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
    const [sortby, setSortby] = useState<"rating" | "pages" | "year">("rating");

    const sortBooks = (books: Ibook[]) => {
        const sortedBooks = [...books];
        if(sortby === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if(sortby === "pages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if(sortby === "year") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        return sortedBooks;
    }

    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishlist = sortBooks(wishlist);

  return (
    <div className="container mx-auto py-[20px]">
      <h1 className="my-4 bg-amber-100 rounded-2xl text-4xl font-bold py-16 text-center">
        Listed Books
      </h1>

      <div className="flex justify-center">
        <select
          value={sortby}
          onChange={(e) =>
            setSortby(e.target.value as "rating" | "pages" | "year")
          }
          defaultValue="Pick a Runtime"
          className="select select-success"
        >
          <option disabled={true}>Sort By</option>
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Number of Pages</option>
          <option value={"year"}>Publishing Year</option>
        </select>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read (${readBooks.length})`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {readBooks.length > 0 ? (
            <div className="flex flex-col gap-5">
              {sortedReadBooks.map((book: Ibook) => (
                <article
                  key={book.bookId}
                  className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-lg sm:flex-row sm:items-center sm:p-6"
                >
                  {/* Book Cover */}
                  <div className="flex h-56 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-50 to-slate-100 p-5 sm:w-44">
                    <Image
                      src={book.image}
                      alt={book.bookName}
                      width={160}
                      height={210}
                      className="h-full w-auto max-w-full rounded-md object-contain shadow-md"
                    />
                  </div>

                  {/* Book Details */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                        {book.category}
                      </span>

                      <span className="text-sm text-slate-500">
                        ★{" "}
                        <span className="font-bold text-slate-800">
                          {book.rating.toFixed(1)}
                        </span>{" "}
                        / 5.0
                      </span>
                    </div>

                    <h2 className="mb-1 text-xl font-bold text-slate-900 sm:text-2xl">
                      {book.bookName}
                    </h2>

                    <p className="mb-3 text-sm text-slate-500">
                      By{" "}
                      <span className="font-semibold text-slate-700">
                        {book.author}
                      </span>
                    </p>

                    <p className="mb-4 line-clamp-3 text-sm leading-6 text-slate-600">
                      {book.review}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {book.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mb-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                      <span>▤ {book.totalPages} pages</span>
                      <span>Published: {book.yearOfPublishing}</span>
                      <span>Publisher: {book.publisher}</span>
                    </div>

                    <Link
                      href={`/books/${book.bookId}`}
                      className="w-fit rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-600"
                    >
                      View Details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="rounded-xl bg-slate-50 p-8 text-center font-semibold text-slate-500">
              No books read yet.
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {wishlist.length > 0 ? (
            <div className="flex flex-col gap-5">
              {sortedWishlist.map((book: Ibook) => (
                <article
                  key={book.bookId}
                  className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-indigo-300 hover:shadow-lg sm:flex-row sm:items-center sm:p-6"
                >
                  <div className="flex h-56 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-slate-100 p-5 sm:w-44">
                    <Image
                      src={book.image}
                      alt={book.bookName}
                      width={160}
                      height={210}
                      className="h-full w-auto max-w-full rounded-md object-contain shadow-md"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                        {book.category}
                      </span>

                      <span className="text-sm text-slate-500">
                        ★{" "}
                        <span className="font-bold text-slate-800">
                          {book.rating.toFixed(1)}
                        </span>{" "}
                        / 5.0
                      </span>
                    </div>

                    <h2 className="mb-1 text-xl font-bold text-slate-900 sm:text-2xl">
                      {book.bookName}
                    </h2>

                    <p className="mb-3 text-sm text-slate-500">
                      By{" "}
                      <span className="font-semibold text-slate-700">
                        {book.author}
                      </span>
                    </p>

                    <p className="mb-4 line-clamp-3 text-sm leading-6 text-slate-600">
                      {book.review}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {book.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mb-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                      <span>▤ {book.totalPages} pages</span>
                      <span>Published: {book.yearOfPublishing}</span>
                      <span>Publisher: {book.publisher}</span>
                    </div>

                    <Link
                      href={`/books/${book.bookId}`}
                      className="w-fit rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
                    >
                      View Details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="rounded-xl bg-slate-50 p-8 text-center font-semibold text-slate-500">
              Your wishlist is empty.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
