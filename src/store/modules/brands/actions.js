import { GET_BRANDS } from "./actionTypes";

export const getBrands = (brands) => ({
    type: GET_BRANDS,
    brands,
});
