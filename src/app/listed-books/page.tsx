'use client';

import { Ibook } from '@/types/books.type';

import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const page = () => {
    const {readBooks} = useContext(BooksContext);
    return (
        <div>
            List of Listed Books
            <ul>
                {readBooks.map((book: Ibook) => (
                    <li key={book.bookId}>{book.bookName}</li>
                ))}
            </ul>
        </div>
    );
};

export default page;