"use client";

import React, { useContext } from "react";
import Ibook from "@/types/books.type";
import { BooksContext } from "@/context/BooksContext";
import { toast } from "react-toastify";

const Wishlistbtn = ({ book }: { book: Ibook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleAddToWishlist = () => {
    setWishlist([...wishlist, book]);
    toast.success(`${book.bookName} has been added to your wishlist!`);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => handleAddToWishlist()}
        className="rounded-lg bg-[#50b2c7] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#389db3]"
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default Wishlistbtn;
