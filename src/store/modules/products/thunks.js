import { getProducts } from "./actions";
import axios from "axios";

export const getProductsThunk = () => (dispatch) => {
    axios
        .get("https://dbmypharmatest.herokuapp.com/produtos")
        .then((res) => {
            dispatch(getProducts(res.data));
        })
        .catch((error) => console.log(error));
};

// export const addProductThunk = (product) => (dispatch, getState) => {
//     const { products } = getState();
// };

// export const editProductThunk = (product) => (dispatch, getState) => {
//     const { products } = getState();
// };

// export const removeProductThunk = (product) => (dispatch, getState) => {
//     const { products } = getState();
// };