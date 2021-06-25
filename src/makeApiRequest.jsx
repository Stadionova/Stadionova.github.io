import axios from "axios";

export default function getServerData(currentInputValue, start, setServerData) {
    axios.get(`https://openlibrary.org/search.json?q=${currentInputValue}`).then(response => {
        if (response.status === 200) {
            const end = new Date().getTime();
            console.log(`request takes: ${end - start}ms`);
            setServerData(response.data.docs);
        }
    });
}
