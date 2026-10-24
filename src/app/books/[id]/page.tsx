import { Ibook } from "@/types/books.type";
import Image from "next/image";

interface IBookDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");

  if (!response.ok) {
    throw new Error("Failed to fetch books data");
  }

  return response.json();
};

const BookDetailPage = async ({ params }: IBookDetailPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();

  const book = booksData.find(
    (book: Ibook) => String(book.bookId) === String(id),
  ) as Ibook | undefined;

  if (!book) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Book not found</h2>
        <p className="text-slate-500">
          The book you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:py-8">
      <div className="grid grid-cols-1 items-stretch gap-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8 lg:p-6">
        {/* Left: Image panel */}
        <div className="flex min-w-0 items-center justify-center rounded-xl bg-[#f3f3f3] p-5 sm:p-7 lg:min-h-[500px]">
          <div className="relative h-[340px] w-full sm:h-[420px] lg:h-[460px]">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              priority
              sizes="(max-width: 1023px) 90vw, 35vw"
              className="object-contain"
            />
          </div>
        </div>

        {/* Right: Details */}
        <section className="flex min-w-0 flex-col justify-center py-2 lg:px-2">
          <h1 className="font-serif text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl">
            {book.bookName}
          </h1>

          <p className="mt-3 text-base text-neutral-600 sm:text-lg">
            By : {book.author}
          </p>

          <div className="my-5 border-t border-neutral-200" />

          <p className="pb-4 text-base text-neutral-700">{book.category}</p>

          <div className="border-t border-neutral-200" />

          <p className="py-5 text-sm leading-7 text-neutral-600 sm:text-base">
            <span className="font-bold text-neutral-900">Review : </span>
            {book.review ||
              `Explore ${book.bookName}, written by ${book.author}. Discover more about this book and what makes it worth reading.`}
          </p>

          {Array.isArray(book.tags) && book.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pb-5">
              <span className="mr-2 font-bold text-neutral-900">Tag</span>

              {book.tags.map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-600"
                >
                  #{tag.replace(/^#/, "")}
                </span>
              ))}
            </div>
          )}

          <div className="border-t border-neutral-200" />

          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-x-3 gap-y-3 py-5 text-sm sm:grid-cols-[190px_1fr] sm:text-base">
            <span className="text-neutral-500">Number of Pages:</span>
            <span className="font-bold text-neutral-900">
              {book.totalPages}
            </span>

            <span className="text-neutral-500">Publisher:</span>
            <span className="break-words font-bold text-neutral-900">
              {book.publisher || "Not specified"}
            </span>

            <span className="text-neutral-500">Year of Publishing:</span>
            <span className="font-bold text-neutral-900">
              {book.yearOfPublishing}
            </span>

            <span className="text-neutral-500">Rating:</span>
            <span className="font-bold text-neutral-900">{book.rating}</span>
          </div>

          <div className="mt-1 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-lg border border-neutral-300 px-6 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100"
            >
              Read
            </button>

            <button
              type="button"
              className="rounded-lg bg-[#50b2c7] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#389db3]"
            >
              Wishlist
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BookDetailPage;
