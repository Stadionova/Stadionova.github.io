import classes from "./Search.module.scss";
import Snippets from "../Snippets/Snippets";
import React, { useState } from 'react';
import axios from "axios";

const Search = () => {
    let currentInputValue;
    let isTimerStarted = false;
    let timerId;

    const [serverData, setServerData] = useState(currentInputValue);
    const allSnipets = React.createRef();
    const inputValue = React.createRef();

    function showAllBooks() {
        allSnipets.current.style.display = 'block';
    }

    let start;

    function getServerData(currentInputValue) {
        axios.get(`https://openlibrary.org/search.json?q=${currentInputValue}`).then(response => {
            if (response.status === 200) {
                const end = new Date().getTime();
                console.log(`request takes: ${end - start}ms`);
                setServerData(response.data.docs);
            }
        });
    }

    function setTimerId() {
        isTimerStarted = true;
        timerId = setTimeout(() => {
            start = new Date().getTime();
            getServerData(currentInputValue);
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
