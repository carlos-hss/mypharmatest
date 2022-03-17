import { SET_CATEGORIES } from "./actionTypes";

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return [...action.categories];

        default:
            return state;
    }
};

export default categoriesReducer;
