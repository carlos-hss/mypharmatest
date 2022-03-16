import {
    GET_BRANDS,
    REMOVE_BRANDS,
    EDIT_BRANDS,
    POST_BRANDS,
} from "./actionTypes";

const initialState = [];

const brandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BRANDS:
            return [...action.brands];

        case EDIT_BRANDS:
            return [...action.brands];

        case REMOVE_BRANDS:
            return [...action.brands];

        case POST_BRANDS:
            return [...action.brands];

        default:
            return state;
    }
};

export default brandsReducer;
