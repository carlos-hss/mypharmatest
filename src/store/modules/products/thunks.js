import {
    getProducts,
    removeProducts,
    editProducts,
    postProducts,
} from "./actions";
import api from "../../../services/api";

export const getProductsThunk = () => (dispatch) => {
    api.get("/produtos")
        .then((res) => {
            dispatch(getProducts(res.data));
        })
        .catch((error) => console.log(error));
};

export const removeProductsThunk = (id) => (dispatch, getState) => {
    const { listProducts } = getState();

    api.delete(`/produtos/${id}`)
        .then(() => {
            const newState = listProducts.filter(
                (product) => product._id !== id
            );
            dispatch(removeProducts(newState));
        })
        .catch((error) => console.log(error));
};

export const postProductsThunk = (data) => (dispatch) => {
    api.post(`/produtos`, JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(() => {
            api.get("/produtos").then((res) => {
                dispatch(postProducts(res.data));
            });
        })
        .catch((error) => console.log(error));
};

export const editProductsThunk = (data, id) => (dispatch) => {
    api.patch(`/produtos/${id}`, JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(() => {
            api.get("/produtos").then((res) => {
                dispatch(editProducts(res.data));
            });
        })
        .catch((error) => console.log(error));
};
