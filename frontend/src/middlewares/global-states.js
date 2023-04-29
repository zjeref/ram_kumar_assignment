import { createContext } from "react";

export const GlobalState = createContext();

export const initialState = {
    currentModal: "",
    searchInput: "",
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "modal": {
            return {
                ...state,
                currentModal: action.payload
            }
        }
        case "search": {
            return {
                ...state,
                searchInput: action.payload
            }
        }

        default: {
            return state
        }
    }
}