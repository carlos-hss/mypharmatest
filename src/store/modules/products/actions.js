import { GET_PRODUCTS } from "./actionTypes";

export const getProducts = (products) => ({
    type: GET_PRODUCTS,
    products,
});
