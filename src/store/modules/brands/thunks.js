import { getBrands } from "./actions";
import axios from "axios";

export const getBrandsThunk = () => (dispatch) => {
    axios
        .get("https://dbmypharmatest.herokuapp.com/marcas")
        .then((res) => {
            dispatch(getBrands(res.data));
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
