import { SET_VERIFY } from "./actionTypes";

const initialState = false;

const verifyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VERIFY:
            return action.verify;

        default:
            return state;
    }
};

export default verifyReducer;
