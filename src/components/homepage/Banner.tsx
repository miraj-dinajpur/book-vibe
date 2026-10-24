import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 pt-8 pb-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 shadow-sm">
        {/* Decorative background elements */}
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />

        <div className="relative grid grid-cols-1 items-center gap-8 px-6 py-10 sm:px-10 md:grid-cols-2 md:gap-4 md:px-14 lg:px-20 lg:py-14">
          {/* Text content */}
          <div className="z-10 space-y-6 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Discover your next favorite
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Books to
              <br />
              freshen up your
              <br />
              <span className="text-orange-600">bookshelf.</span>
            </h1>

            <p className="mx-auto max-w-md text-base leading-7 text-slate-600 md:mx-0 lg:text-lg">
              Explore stories that inspire, knowledge that empowers, and books
              you will love to return to.
            </p>

            <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row sm:justify-center md:justify-start">
              <Link
                href="/books"
                className="btn h-12 min-h-12 rounded-xl border-0 bg-orange-600 px-7 text-base font-semibold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl"
              >
                Explore Books
                <span aria-hidden="true">→</span>
              </Link>

              <span className="text-sm font-medium text-slate-500">
                Find your next great read
              </span>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="absolute inset-6 rounded-full bg-orange-300/30 blur-3xl" />

            <div className="relative mx-auto w-full max-w-sm rotate-1 overflow-hidden rounded-2xl border border-white/70 bg-white/50 p-3 shadow-2xl shadow-orange-900/10 transition-transform duration-500 hover:rotate-0 md:max-w-md">
              <Image
                src={bannerImg}
                alt="A collection of books to inspire your next read"
                priority
                sizes="(max-width: 768px) 90vw, 45vw"
                className="h-auto w-full rounded-xl object-contain"
              />
            </div>

            <div className="absolute -bottom-3 -left-2 rounded-xl border border-white/70 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:-left-4">
              <p className="text-sm font-bold text-slate-800">
                Your next chapter
              </p>
              <p className="text-xs text-slate-500">Starts with a book.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
