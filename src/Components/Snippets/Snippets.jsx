import classes from "./Snippets.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";

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
                            cover: `http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`
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
