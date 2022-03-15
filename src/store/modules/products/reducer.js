import { GET_PRODUCTS } from "./actionTypes";

const initialState = [];

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return [...action.products];

        default:
            return state;
    }
};

export default productReducer;
