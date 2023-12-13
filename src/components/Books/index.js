import React, { useEffect, useState } from "react";
import Header from "../Header";

const Books = () => {
    const [books, setbooks] = useState([]);

    useEffect(() => {
        const fetchedBooks = async () => {
            const response = await fetch('https://apis.ccbp.in/book-hub/books')
            const booksData = await response.json()
            setbooks(booksData)
            console.log(booksData)
        }

        fetchedBooks()
    }, [])
    

  return (
    <>
      <Header />
      <div>Books</div>
    </>
  );
};

export default Books;
