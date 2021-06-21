import classes from "./Search.module.scss";
import Snippets from "../Snippets/Snippets";
import React from "react";
import axios from "axios";

const allSnipets = React.createRef();
const inputValue = React.createRef();

let isTimerStarted = false;
let timerId;
let currentInputValue;

class Search extends React.Component {
    state = {
        data: []
    };
    getServerData = (currentInputValue) => {
        axios.get(`https://openlibrary.org/search.json?q=${currentInputValue}`).then(response => {
            if (response.status === 200 && allSnipets.current) {
                allSnipets.current.style.display = 'block';
                this.setState({
                    data: response.data.docs
                });
            }
        });
    }
    catchInputChanges = () => {
        currentInputValue = inputValue.current.value.replace(/ /g, "+").toLowerCase();
        isTimerStarted = true;
        if (isTimerStarted) {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                this.getServerData(currentInputValue);
                isTimerStarted = false;
                clearTimeout(timerId);
            }, 1000);
        }
    }
    render = () => {
        return (
            <div className={classes.searchInput}>
                <div className={classes.searchBlock}>
                    <input type="text" onChange={this.catchInputChanges}
                        ref={inputValue} placeholder='type title of the book here' />
                    <button onClick={this.getServerData}>SEARCH</button>
                </div>
                <Snippets buttonRef={allSnipets} data={this.state.data} />
            </div>
        )
    }
}

export default Search;
