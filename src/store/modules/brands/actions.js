import {
    GET_BRANDS,
    POST_BRANDS,
    REMOVE_BRANDS,
    EDIT_BRANDS,
} from "./actionTypes";

export const getBrands = (brands) => ({
    type: GET_BRANDS,
    brands,
});

export const editBrands = (brands) => ({
    type: EDIT_BRANDS,
    brands,
});

export const removeBrands = (brands) => ({
    type: REMOVE_BRANDS,
    brands,
});

export const postBrands = (brands) => ({
    type: POST_BRANDS,
    brands,
});
