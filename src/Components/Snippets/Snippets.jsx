import classes from "./Snippets.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const hardcodedBookCover = "https://upload.wikimedia.org/wikipedia/ru/1/10/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8_%22%D0%9D%D0%B0%D0%B2%D0%B0%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%22%2C_%D0%9C%D0%B0%D0%BA%D1%81_%D0%A4%D1%80%D0%B0%D0%B9.jpg";

const Snippets = ({ data, buttonRef }) => {
    return (
        <div className={classes.snippetsWrapper} ref={buttonRef} >
            {data && data.map(book => {
                const dataKey = book.key.split('/');
                const id = dataKey[dataKey.length - 1];
                const isbn = book.isbn ? book.isbn[0] : '';
                return (
                    <NavLink
                        to={{
                            pathname: book.key,
                            title: book.title,
                            author: book['author_name'] ? book['author_name'][0] : '',
                            publishDate: book['publish_date'] ? book['publish_date'][0] : '',
                            publisher: book.publisher ? book.publisher[0] : '',
                            isbn: book.isbn ? book.isbn[0] : '',
                            cover: hardcodedBookCover
                        }}>
                        <div className={classes.eachSnippet} key={id}>
                            <img src={`http://covers.openlibrary.org/b/isbn/${isbn}-S.jpg`} alt="обложка книги" />
                            <h1>{book.title}</h1>
                            <p>{book['author_name'] ? book['author_name'][0] : ''}</p>
                        </div>
                    </NavLink>
                )
            })}
        </div >
    )
}

export default Snippets;
