import { createStore } from 'redux';

const API_REQUEST_IN_PROCESS = 'API_REQUEST_IN_PROCESS';

const initialState = {
    isResponseGot: false
};

function catchApiResponse(state = initialState, action) {
    switch (action.type) {
        case API_REQUEST_IN_PROCESS:
            return {
                ...state,
                isResponseGot: action.isResponseGot
            };
        default:
            return state;
    }
}

const store = createStore(catchApiResponse, initialState);

export const catchApiRequest = (isResponseGot) => {
    return {
        type: API_REQUEST_IN_PROCESS,
        isResponseGot: isResponseGot
    }
};

export default store;

