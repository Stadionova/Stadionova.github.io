import classes from "./DetailedSnippet.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const DetailedSnippet = (props) => {
    let bookDetailedData;

    function addDefaultSrc(event) {
        event.target.src = 'https://klike.net/uploads/posts/2020-04/1587719791_1.jpg';
    }

    if (props.location.isbn) {
        bookDetailedData = props.location;
        localStorage.setItem('bookDetailedData', JSON.stringify(bookDetailedData));
    } else {
        if (!JSON.parse(localStorage.getItem('bookDetailedData')).isbn) {
            localStorage.setItem('bookDetailedData', JSON.stringify(bookDetailedData));
            bookDetailedData = JSON.parse(localStorage.getItem('bookDetailedData'));
        } else {
            bookDetailedData = JSON.parse(localStorage.getItem('bookDetailedData'));
        }
    }

    return (
        <div className={classes.modalWindow}>
            <div className={classes.detailedSnippetWrapper}>
                <img onError={addDefaultSrc} src={bookDetailedData.cover} alt="" />
                <h1>НАЗВАНИЕ {bookDetailedData.title}</h1>
                <p>АВТОР {bookDetailedData.author}</p>
                <p>ДАТА ПУБЛИКАЦИИ {bookDetailedData.publishDate}</p>
                <p>ИЗДАТЕЛЬ {bookDetailedData.publisher}</p>
                <p>ISBN {bookDetailedData.isbn}</p>
            </div>
            <NavLink
                to={{
                    pathname: '/book-founder'
                }}>
                <button>✖</button>
            </NavLink>
        </div>
    )
}

export default DetailedSnippet;
