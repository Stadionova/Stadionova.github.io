import classes from "./Search.module.scss";
import Snippets from "../Snippets/Snippets";
import React, { useState } from 'react';
import axios from "axios";

const Search = () => {
    let currentInputValue;

    const [serverData, setServerData] = useState(currentInputValue);

    const allSnipets = React.createRef();
    const inputValue = React.createRef();

    let isTimerStarted = false;
    let timerId;

    function getServerData(currentInputValue) {
        axios.get(`https://openlibrary.org/search.json?q=${currentInputValue}`).then(response => {
            if (response.status === 200 && allSnipets.current) {
                allSnipets.current.style.display = 'block';
                setServerData(response.data.docs);
            }
        });
    }

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

    return (
        <div className={classes.searchInput}>
            <div className={classes.searchBlock}>
                <input type="text" onChange={catchInputChanges}
                    ref={inputValue} placeholder='type title of the book here' />
                <button onClick={getServerData}>SEARCH</button>
            </div>
            <Snippets buttonRef={allSnipets} data={serverData} />
        </div>
    )
}

export default Search;
