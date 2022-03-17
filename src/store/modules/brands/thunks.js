import { getBrands, postBrands, removeBrands, editBrands } from "./actions";
import api from "../../../services/api";
import { toast } from "react-toastify";

export const getBrandsThunk = () => (dispatch, getState) => {
    const { endpoints } = getState();

    api.get(`/marcas/${endpoints.brands}`)
        .then((res) => {
            dispatch(getBrands(res.data));
        })
        .catch((error) => console.log(error));
};

export const removeBrandsThunk = (id) => (dispatch, getState) => {
    const { listBrands } = getState();

    api.delete(`/marcas/${id}`)
        .then(() => {
            toast.success("Marca excluída com sucesso");
            const newState = listBrands.filter((brand) => brand._id !== id);
            dispatch(removeBrands(newState));
        })
        .catch((error) => {
            toast.error("Falha ao excluir a marca");
            console.log(error);
        });
};

export const postBrandsThunk = (data) => (dispatch) => {
    api.post(`/marcas`, JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(() => {
            api.get("/marcas").then((res) => {
                dispatch(postBrands(res.data));
                toast.success("Marca adicionada com sucesso");
            });
        })
        .catch((error) => {
            toast.error("Falha ao adicionar a marca");
            console.log(error);
        });
};

export const editBrandsThunk = (data, id) => (dispatch) => {
    api.patch(`/marcas/${id}`, JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(() => {
            api.get("/marcas").then((res) => {
                dispatch(editBrands(res.data));
                toast.success("Marca editada com sucesso");
            });
        })
        .catch((error) => {
            toast.error("Falha ao editar a marca");
            console.log(error);
        });
};
