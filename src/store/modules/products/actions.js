import {
    GET_PRODUCTS,
    REMOVE_PRODUCTS,
    EDIT_PRODUCTS,
    POST_PRODUCTS,
} from "./actionTypes";

export const getProducts = (products) => ({
    type: GET_PRODUCTS,
    products,
});

export const removeProducts = (products) => ({
    type: REMOVE_PRODUCTS,
    products,
});

export const postProducts = (products) => ({
    type: POST_PRODUCTS,
    products,
});

export const editProducts = (products) => ({
    type: EDIT_PRODUCTS,
    products,
});
