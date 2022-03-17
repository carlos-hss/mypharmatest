import {
    getProducts,
    removeProducts,
    editProducts,
    postProducts,
} from "./actions";
import api from "../../../services/api";
import { toast } from "react-toastify";

export const getProductsThunk = () => (dispatch, getState) => {
    const { endpoints } = getState();

    api.get(`/produtos${endpoints.products}`)
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
            toast.success("Produto excluído com sucesso");
        })
        .catch((error) => {
            toast.error("Falha ao remover produto");
            console.log(error);
        });
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
                toast.success("Produto adicionado com sucesso");
            });
        })
        .catch((error) => {
            toast.error("Falha ao adicionar produto");
            console.log(error);
        });
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
                toast.success("Produto editado com sucesso");
            });
        })
        .catch((error) => {
            toast.error("Falha ao editar produto");
            console.log(error);
        });
};
