import classes from "./Search.module.scss";
import makeApiRequest from "../../makeApiRequest";
import Snippets from "../Snippets/Snippets";
import React, { useState } from 'react';

const Search = () => {
    let currentInputValue;
    let isTimerStarted = false;
    let timerId;
    let start;

    const [serverData, setServerData] = useState(currentInputValue);
    const allSnipets = React.createRef();
    const inputValue = React.createRef();

    function showAllBooks() {
        allSnipets.current.style.display = 'block';
    }

    function setTimerId() {
        isTimerStarted = true;
        timerId = setTimeout(() => {
            start = new Date().getTime();
            makeApiRequest(currentInputValue, start, setServerData);
            isTimerStarted = false;
        }, 1000);
    }

    function catchInputChanges() {
        currentInputValue = inputValue.current.value.replace(/ /g, "+").toLowerCase();
        if (!isTimerStarted) {
            setTimerId();
        } else {
            clearTimeout(timerId);
            setTimerId();
        }
    }

    return (
        <div className={classes.searchInput}>
            <div className={classes.searchBlock}>
                <input
                    type="text"
                    onChange={catchInputChanges}
                    ref={inputValue}
                    placeholder='type title of the book here'
                />
                <button onClick={showAllBooks}>SEARCH</button>
            </div>
            <Snippets buttonRef={allSnipets} data={serverData} />
        </div>
    )
}

export default Search;
