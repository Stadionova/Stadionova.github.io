import classes from "./DetailedSnippet.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const DetailedSnippet = (props) => {
    const bookDetailedData = props.location;
    return (
        <div className={classes.modalWindow}>
            <div className={classes.detailedSnippetWrapper}>
                <img src={bookDetailedData.cover} alt="" />
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
