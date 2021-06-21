import classes from "./Search.module.scss";
import Snippets from "../Snippets/Snippets";
import React from "react";
import axios from "axios";

const Search = () => {
    const allSnipets = React.createRef();
    const inputValue = React.createRef();

    let isTimerStarted = false;
    let timerId;
    let currentInputValue;

    function catchInputChanges() {
        currentInputValue = inputValue.current.value.replace(/ /g, "+").toLowerCase();
        isTimerStarted = true;
        if (isTimerStarted) {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                getServerData(currentInputValue);
                isTimerStarted = false;
                clearTimeout(timerId);
            }, 1000);
        }
    }

    function getServerData(currentInputValue) {
        axios.get(`https://openlibrary.org/search.json?q=${currentInputValue}`).then(response => {
            if (response.status === 200 && allSnipets.current) {
                allSnipets.current.style.display = 'block';
            }
        });
    }

    return (
        <div className={classes.searchInput}>
            <div className={classes.searchBlock}>
                <input type="text" onChange={catchInputChanges} ref={inputValue} />
                <button onClick={getServerData}>SEARCH</button>
            </div>
            <Snippets buttonRef={allSnipets} />
        </div>
    )
}

export default Search;
