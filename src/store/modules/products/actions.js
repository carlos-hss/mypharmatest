import { ADD_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT } from "./actionTypes";

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    product,
});

export const editProduct = (product) => ({
    type: EDIT_PRODUCT,
    product,
});

export const removeProduct = (product) => ({
    type: REMOVE_PRODUCT,
    product,
});
