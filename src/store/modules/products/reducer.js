import { ADD_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT } from "./actionTypes";

const initialState = {
    name: "",
    description: "",
    price: "",
    inventory: 0,
    category: "",
    brand: "",
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return action.products;

        case EDIT_PRODUCT:
            return action.products;

        case REMOVE_PRODUCT:
            return action.products;

        default:
            return state;
    }
};

export default productReducer;
