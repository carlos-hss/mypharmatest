import { GET_BRANDS } from "./actionTypes";

const initialState = [];

const brandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BRANDS:
            return [...action.brands];

        default:
            return state;
    }
};

export default brandsReducer;
