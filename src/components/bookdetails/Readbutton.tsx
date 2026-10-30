'use client';


import { BooksContext } from '@/context/BooksContext';
import { Ibook } from '@/types/books.type';
import React, { useContext } from 'react';

const Readbutton = ({book}: {book: Ibook}) => {

    const {readBooks, setReadBooks} = useContext(BooksContext);

    const handleReadBook = () => {
        setReadBooks([...readBooks, book]);
        alert(`book has been added to your read books list!`);
    }

    return (
      <div>
        <button
          type="button"
          onClick={() => handleReadBook()}
          className="cursor-pointer rounded-lg border border-neutral-300 px-6 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100"
        >
          Read
        </button>
      </div>
    );
};

export default Readbutton;