import axios from "axios";

export default function getServerData(currentInputValue, setServerData, stopLoadingAnimation) {
    axios.get(`https://openlibrary.org/search.json?q=${currentInputValue}`).then(response => {
        if (response.status === 200) {
            setServerData(response.data.docs);
            stopLoadingAnimation();
        }
    });
}
