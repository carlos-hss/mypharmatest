import { setCategories } from "./actions";
import api from "../../../services/api";
import { toast } from "react-toastify";

export const getCategoriesThunk = () => (dispatch, getState) => {
    const { endpoints } = getState();

    api.get(`/categorias${endpoints.categories}`)
        .then((res) => {
            dispatch(setCategories(res.data));
        })
        .catch((error) => console.log(error));
};

export const editCategoryThunk = (data, id) => (dispatch) => {
    api.patch(`/categorias/${id}`, JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(() => {
            api.get("/categorias").then((res) => {
                dispatch(setCategories(res.data));
                toast.success("Categoria editada com sucesso");
            });
        })
        .catch((error) => {
            toast.error("Falha ao editar categoria");
            console.log(error);
        });
};

export const postCategoryThunk = (data) => (dispatch) => {
    api.post(`/categorias`, JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(() => {
            api.get("/categorias").then((res) => {
                dispatch(setCategories(res.data));
                toast.success("Categoria adicionada com sucesso");
            });
        })
        .catch((error) => {
            toast.error("Falha ao adicionar categoria");
            console.log(error.message);
        });
};

export const removeCategoryThunk = (id) => (dispatch, getState) => {
    const { listCategories } = getState();

    api.delete(`/categorias/${id}`)
        .then(() => {
            const newState = listCategories.filter(
                (category) => category._id !== id
            );
            dispatch(setCategories(newState));
            toast.success("Categoria removida com sucesso");
        })
        .catch((error) => {
            toast.error("Falha ao remover categoria");
            console.log(error);
        });
};
