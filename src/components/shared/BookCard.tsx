import { Ibook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BookCardProps {
  book: Ibook;
}

const BookCard = ({book}: BookCardProps) => {
  return (
    <div>
      <article
        key={book.bookId}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-200/60"
      >
        {/* Book cover */}
        <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-slate-100 p-6">
          <span className="absolute left-4 top-4 z-10 rounded-full border border-white/80 bg-white/90 px-3 py-1 text-xs font-semibold text-orange-700 shadow-sm">
            {book.category}
          </span>

          <Image
            src={book.image}
            alt={`Cover of ${book.bookName}`}
            width={200}
            height={260}
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 220px"
            className="h-full w-auto max-w-full rounded-md object-contain shadow-lg transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Book information */}
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className="text-lg text-amber-500">★</span>
              <span className="text-sm font-bold text-slate-800">
                {book.rating.toFixed(1)}
              </span>
              <span className="text-xs text-slate-400">/ 5.0</span>
            </div>

            <span className="text-xs text-slate-400">
              {book.yearOfPublishing}
            </span>
          </div>

          <h3 className="mb-1 line-clamp-2 min-h-12 text-lg font-bold leading-6 text-slate-900 transition-colors group-hover:text-orange-700">
            {book.bookName}
          </h3>

          <p className="mb-4 text-sm text-slate-500">
            by <span className="font-medium text-slate-700">{book.author}</span>
          </p>

          <p className="mb-5 line-clamp-3 text-sm leading-6 text-slate-500">
            {book.review}
          </p>

          {/* Tags */}
          <div className="mb-5 flex flex-wrap gap-2">
            {book.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto border-t border-slate-100 pt-4">
            <div className="mb-4 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true">▤</span>
                {book.totalPages} pages
              </span>

              <span className="max-w-[55%] truncate">{book.publisher}</span>
            </div>

            <Link
              href={`/books/${book.bookId}`}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600"
            >
              View Details
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BookCard;
