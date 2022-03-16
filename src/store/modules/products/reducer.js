import {
    EDIT_PRODUCTS,
    GET_PRODUCTS,
    REMOVE_PRODUCTS,
    POST_PRODUCTS,
} from "./actionTypes";

const initialState = [];

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return [...action.products];

        case REMOVE_PRODUCTS:
            return [...action.products];

        case EDIT_PRODUCTS:
            return [...action.products];

        case POST_PRODUCTS:
            return [...action.products];

        default:
            return state;
    }
};

export default productReducer;
