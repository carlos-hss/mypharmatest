import { SET_ENDPOINTS } from "./actionTypes";

const initialState = {
    products: "",
    categories: "",
    brands: "",
};

const endpointsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ENDPOINTS:
            return action.endPoints;

        default:
            return state;
    }
};

export default endpointsReducer;
