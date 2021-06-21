import classes from "./DetailedSnippet.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const DetailedSnippet = (props) => {
    const bookDetailedData = props.location;
    return (
        <div className={classes.modalWindow}>
            <div className={classes.detailedSnippetWrapper}>
                <img src={bookDetailedData.cover} alt="" />
                <h1>{bookDetailedData.title}</h1>
                <p>{bookDetailedData.author}</p>
                <p>{bookDetailedData.publishDate}</p>
                <p>{bookDetailedData.publisher}</p>
                <p>{bookDetailedData.isbn}</p>
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
