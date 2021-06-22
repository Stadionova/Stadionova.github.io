import classes from "./DetailedSnippet.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const DetailedSnippet = (props) => {
    const bookDetailedData = props.location;
    function addDefaultSrc(event) {
        event.target.src = 'https://klike.net/uploads/posts/2020-04/1587719791_1.jpg';
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
                    pathname: '/'
                }}>
                <button>✖</button>
            </NavLink>
        </div>
    )
}

export default DetailedSnippet;
